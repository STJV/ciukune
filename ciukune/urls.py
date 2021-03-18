"""Urls for ciukune core."""
from sys import stdout
from django.urls import include
from django.urls import path
from django.urls import re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from ciukune.views.auth import LoginView
from ciukune.views.auth import LogoutView
from ciukune.views.auth import PasswordChangeView
from ciukune.views.auth import PasswordResetView
from ciukune.views.auth import PasswordResetConfirmView
from ciukune.views.user import UserViewSet
from ciukune.views.auth import CurrentUserView

def _get_auth_url():
    login = LoginView.as_view()

    logout = LogoutView.as_view()
    reset = PasswordResetView.as_view()
    reset_confirm = PasswordResetConfirmView.as_view()
    user = CurrentUserView.as_view()
    password_change = PasswordChangeView.as_view()

    return include([
        path('/login/', login, name='login'),
        path('/logout/', logout, name='logout'),
        path('/password-reset-confirm/', reset_confirm, name='password_reset_confirm'),
        path('/password-reset/', reset, name='password_reset'),
        path('/user/', user, name='user_details'),
        path('/password-change/', password_change, name='password_change'),
    ])

def _get_api_url():
    router = DefaultRouter()
    router.register(r'users', UserViewSet, basename='user')
    auth_url = _get_auth_url()
    return include(
        router.urls +
        [path('auth', auth_url)]
    )

urlpatterns = [
    re_path(r'api/', _get_api_url()),
    re_path(r'^(?!api).*$', TemplateView.as_view(template_name="index.html"), name="index"),
]
