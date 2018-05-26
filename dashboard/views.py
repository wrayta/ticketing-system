from rest_framework import generics
# from django.shortcuts import render
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from django.conf import settings
from django.core.exceptions import ValidationError


import json

from . import models
from . import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# def index(request):
#     return render(request, 'index.html')

# @api_view(['POST'])
# def register(request):
#     if request.method == 'POST':
#         serializer = serializers.UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def authenticate(email_matched_user, email=None, password=None):
    pwd_valid = check_password(password, email_matched_user.password)
    if pwd_valid:
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            user is None
        return user
    return None

@api_view(['POST'])
def login_user(request):
    # serializer = serializers.UserSerializer(data=request.data)
    data = json.loads(request.body)

    try:
        validate_email(data['email'])
        email_matched_user = User.objects.get(email=data['email'])
        user = authenticate(email_matched_user, email=data['email'], password=data['password'])
    except User.DoesNotExist or ValidationError:
        print("USER DOESN'T EXIST OR EMAIL INVALID")
        return Response({"message": "User doesn't exist or email invalid..."})

    if user is not None and user.is_active:
        login(request, user)
        print('IS_ACTIVE = TRUE')
        return Response({"message": "Logged In!"})

    else:
        print('IS_ACTIVE = FALSE')
        return Response({"message": "Failed to login..."})
    # return Response({'key': 'value'}, status=status.HTTP_200_OK)

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