from django.urls import path, include
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name="main.html")),
    # path('', views.index, name='index'),
]