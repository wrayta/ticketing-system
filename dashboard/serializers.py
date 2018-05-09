from rest_framework import serializers
from . import models

class SystemUserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        fields = (
            'id',
            'email',
            # 'password',
            'full_name',
        )
        model = models.SystemUser

    def get_full_name(self, obj):
        return '{} {}'.format(obj.first_name, obj.last_name)

class SystemUserField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.id, 'email': value.email, 'name': value.first_name + ' ' + value.last_name,}

    def to_internal_value(self, value):
        # name_array = [word.strip() for word in value['name'].split(' ')]
        # first_name = name_array[0]
        # last_name = name_array[1]
        # print (value)
        # return {'id': value['id'], 'email': value['email'], 'password': value['password'], 'first_name': first_name, 'last_name': last_name,}
        return models.SystemUser.objects.get(id=value)

class TicketSerializer(serializers.ModelSerializer):
    # author = SystemUserSerializer(many=False, read_only=True)
    # assignee = SystemUserSerializer(many=False, read_only=True)
    author = SystemUserField(many=False, queryset=models.SystemUser.objects.all())
    assignee = SystemUserField(many=False, queryset=models.SystemUser.objects.all())

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