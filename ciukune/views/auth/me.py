"""Returns the currently logged in user, if applicable."""
from rest_framework.views import APIView


class MeView(APIView):
    """User view set, providing standard user endpoints."""

    def get(self):
        return {'me'}

