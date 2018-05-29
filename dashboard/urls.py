from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('tickets', views.TicketViewSet, 'tickets')

urlpatterns = [
    # path('', views.index, name='index'),
    path('', TemplateView.as_view(template_name="index.html")),
    # path('tickets/', views.ListTicket.as_view()),
    # path('tickets/<int:pk>/', views.DetailTicket.as_view()),
    path('users/', views.ListUser.as_view()),
    path('users/<int:pk>/', views.DetailUser.as_view()),
    path('auth/login/', views.LoginAPI.as_view()),
    path('auth/register/', views.RegistrationAPI.as_view()),
    path('auth/user/', views.UserAPI.as_view()),
]

urlpatterns += router.urls