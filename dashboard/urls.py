from django.urls import path, include
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('', TemplateView.as_view(template_name="index.html")),
    path('tickets/', views.ListTicket.as_view()),
    path('tickets/<int:pk>/', views.DetailTicket.as_view()),
    path('users/', views.ListUser.as_view()),
    path('users/<int:pk>/', views.DetailUser.as_view()),
    path('login/', views.login_user),
]