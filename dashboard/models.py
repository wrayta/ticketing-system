from django.db import models
from django.utils import timezone

class System_user(models.Model):
    def __str__(self):
        return self.first_name + ' ' + self.last_name

    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)

class Ticket(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    status = models.CharField(max_length=20, default='OPEN')
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(System_user, null=True, on_delete=models.SET_NULL, related_name='%(class)s_fk_author_ticket_system_user')
    assignee = models.ForeignKey(System_user, null=True, on_delete=models.SET_NULL, related_name='%(class)s_fk_assignee_ticket_system_user')