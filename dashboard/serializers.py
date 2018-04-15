from rest_framework import serializers
from . import models

class SystemUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
        )
        model = models.SystemUser

class SystemUserField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.id, 'email': value.email, 'name': value.first_name + ' ' + value.last_name,}

class TicketSerializer(serializers.ModelSerializer):
    # author = SystemUserSerializer(many=False, read_only=True)
    # assignee = SystemUserSerializer(many=False, read_only=True)
    author = SystemUserField(many=False, read_only=True)
    assignee = SystemUserField(many=False, read_only=True)

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