from rest_framework import serializers
from . import models


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'status',
            'created_date',
            'modified_date',
            'author',
            'assignee',
        )
        model = models.Ticket

class SystemUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
        )
        model = models.System_user