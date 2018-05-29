from rest_framework import generics, permissions, viewsets
# from django.shortcuts import render
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from django.conf import settings
from django.core.exceptions import ValidationError

from knox.models import AuthToken

import json

from . import models
from . import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

def authenticate(email_matched_user, email=None, password=None):
    pwd_valid = check_password(password, email_matched_user.password)
    if pwd_valid:
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            user is None
        return user
    return None

# @api_view(['POST'])
# def login_user(request):
#     data = json.loads(request.body)
#
#     try:
#         validate_email(data['email'])
#         email_matched_user = User.objects.get(email=data['email'])
#         user = authenticate(email_matched_user, email=data['email'], password=data['password'])
#     except User.DoesNotExist or ValidationError:
#         print("USER DOESN'T EXIST OR EMAIL INVALID")
#         return Response({"message": "User doesn't exist or email invalid..."})
#
#     if user is not None and user.is_active:
#         login(request, user)
#         print('IS_ACTIVE = TRUE')
#         return Response({"message": "Logged In!"})
#
#     else:
#         print('IS_ACTIVE = FALSE')
#         return Response({"message": "Failed to login..."})

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = serializers.CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class LoginAPI(generics.GenericAPIView):
    serializer_class = serializers.LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = serializers.UserSerializer

    def get_object(self):
        return self.request.user

class TicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    # serializer_class = serializers.TicketSerializer

    def get_queryset(self):
        return self.request.user.assignee_tickets.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_serializer_class(self):
        print(self.action)
        if self.action == 'list' or self.action == 'retrieve':
            return serializers.TicketSerializer
        if self.action == 'create' or self.action == 'update':
            return serializers.CreateUpdateTicketSerializer
        return serializers.TicketSerializer

class ListTicket(generics.ListCreateAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializers.TicketSerializer

class DetailTicket(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializers.TicketSerializer

class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer