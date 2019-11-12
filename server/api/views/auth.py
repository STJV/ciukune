# Copyright © 2019 STJV <contact@stjv.fr>
#
# This work is free. You can redistribute it and/or modify it under the terms of
# the Do What The Fuck You Want To Public License, Version 2, as published by
# Sam Hocevar.
#
# See the COPYING file for more details.
""" Sign on view for SAML """
from api.serializers.auth import LoginSerializer
from api.serializers.auth import LoginSerializer
from django.contrib.auth import authenticate
from django.contrib.auth import login as django_login
from django.contrib.auth import logout as django_logout
from django.utils.translation import ugettext_lazy as _
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView

class GetTokenView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token, _ = Token.objects.get_or_create(user=request.user)
        return Response({'token' : token.key}, status=HTTP_200_OK)

class LoginView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(
            data=self.request.data,
            context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        django_login(request, user)

        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token' : token.key}, status=HTTP_200_OK)

class LogoutView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        django_logout(request)
        return Response()

login = LoginView.as_view()
logout = LogoutView.as_view()
get_token = GetTokenView.as_view()