"""User views related class & utilities."""
from rest_framework.viewsets import ModelViewSet

from ciukune.models.user import User
from ciukune.serializers.user import UserSerializer


class UserViewSet(ModelViewSet):
    """User view set, providing standard user endpoints."""

    queryset = User.objects.all()
    serializer_class = UserSerializer
