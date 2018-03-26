# Generated by Django 2.1.dev20180314142434 on 2018-03-25 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='System_User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=2000)),
                ('status', models.CharField(default='OPEN', max_length=20)),
                ('creation_date', models.DateTimeField()),
                ('assignee', models.ForeignKey(on_delete='SET_NULL', related_name='ticket_fk_assignee_ticket_system_user', to='dashboard.System_User')),
                ('author', models.ForeignKey(on_delete='SET_NULL', related_name='ticket_fk_author_ticket_system_user', to='dashboard.System_User')),
            ],
        ),
    ]