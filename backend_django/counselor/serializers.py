from rest_framework import serializers

from .models import Counselor


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = (
            # __all__로도 가능
            # 나중에 필요없는 데이터 자르기 위해서 전체 선언
            'id',
            'email',
            'password',
            'name',
            'avilable_time',
            'certificate',
            'subject',
            'carreer',
            'explanation',
            'gender'
        )
