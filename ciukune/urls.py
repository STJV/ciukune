"""Urls for ciukune core."""
from sys import stdout
from django.urls import include
from django.urls import path
from django.urls import re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

from ciukune.views.auth.me import MeView

def _get_api_url():
    return include([
        path('auth/login', TokenObtainPairView.as_view(), name='login'),
        path('auth/me', MeView.as_view(), name='me'),
        path('auth/refresh', TokenRefreshView.as_view(), name='refresh'),
    ])

urlpatterns = [
    re_path(r'api/', _get_api_url()),
    re_path(r'^(?!api).*$', TemplateView.as_view(template_name="index.html"), name="index"),
]
