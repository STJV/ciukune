"""Returns the currently logged in user, if applicable."""
from ciukune.serializers.user import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class MeView(APIView):
    """User view set, providing standard user endpoints."""
    serializer_class = UserSerializer

    def get(self, request):
        serializer = UserSerializer(instance=request.user)
        return Response(serializer.data)

