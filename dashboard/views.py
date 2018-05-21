from rest_framework import generics
# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework import status

from . import models
from . import serializers
from django.contrib.auth.models import User

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