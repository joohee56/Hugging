from rest_framework import serializers

from .models import Counselor, Counsel, CounselorReview, Member

class CounselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counsel
        fields = '__all__'

class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = '__all__'

class CounselorReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CounselorReview
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'