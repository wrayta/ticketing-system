from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from . import views
from django.core.validators import validate_email

class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'id',
            'email',
            'username',
            'password',
            'first_name',
            'last_name',
            'is_active',
        )
        extra_kwargs = {'password': {'write_only': True}}
        model = User

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

class LoginUserSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        validate_email(data['email'])
        email_matched_user = User.objects.get(email=data['email'])
        user = views.authenticate(email_matched_user, email=data['email'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'username',
            'name',
        )

    def get_name(self, obj):
        return '{} {}'.format(obj.first_name, obj.last_name)

class UserField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.id, 'email': value.email, 'username': value.username, 'name': value.first_name + ' ' + value.last_name,}

    def to_internal_value(self, value):
        # name_array = [word.strip() for word in value['name'].split(' ')]
        # first_name = name_array[0]
        # last_name = name_array[1]
        # print (value)
        # return {'id': value['id'], 'email': value['email'], 'password': value['password'], 'first_name': first_name, 'last_name': last_name,}
        return User.objects.get(id=value)

class TicketSerializer(serializers.ModelSerializer):
    # author = SystemUserSerializer(many=False, read_only=True)
    # assignee = SystemUserSerializer(many=False, read_only=True)
    author = UserField(many=False, queryset=User.objects.all())
    assignee = UserField(many=False, queryset=User.objects.all())

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

class CreateUpdateTicketSerializer(serializers.ModelSerializer):
    assignee = UserField(many=False, queryset=User.objects.all())

    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'status',
            'assignee',
        )
        model = models.Ticket