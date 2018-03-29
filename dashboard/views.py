from rest_framework import generics
from itertools import chain

from . import models
from . import serializers

#
# def index(request):
#     return HttpResponse("Hello, world. You're at the dashboard index.")

class ListTicket(generics.ListCreateAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializers.TicketSerializer

class DetailTicket(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializers.TicketSerializer

class ListUser(generics.ListCreateAPIView):
    queryset = models.System_user.objects.all()
    serializer_class = serializers.SystemUserSerializer

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.System_user.objects.all()
    serializer_class = serializers.SystemUserSerializer