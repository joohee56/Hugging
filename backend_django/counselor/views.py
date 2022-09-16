from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Counselor
from .serializers import CounselorSerializer


class CounselorListAPI(APIView):
    def get(self, request):
        queryset = Counselor.objects.all()
        print(queryset)
        serializer = CounselorSerializer(queryset, many=True)
        return Response(serializer.data)
