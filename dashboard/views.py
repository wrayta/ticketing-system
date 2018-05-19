from rest_framework import generics
# from django.shortcuts import render

from . import models
from . import serializers
from django.contrib.auth.models import User

# def index(request):
#     return render(request, 'index.html')

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