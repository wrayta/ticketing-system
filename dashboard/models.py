from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# class SystemUser(models.Model):
#     def __str__(self):
#         return self.first_name + ' ' + self.last_name
#
#     email = models.EmailField(max_length=200)
#     password = models.CharField(max_length=200)
#     first_name = models.CharField(max_length=200)
#     last_name = models.CharField(max_length=200)

class Ticket(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    status = models.CharField(max_length=20, default='OPEN')
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name='author_tickets')
    assignee = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name='assignee_tickets')