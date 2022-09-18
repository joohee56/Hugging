from django.db import models


# Create your models here.

class CounselorReview(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    member_id = models.IntegerField(
        null=False
    )
    counselor_id = models.IntegerField(
        null=False
    )
    score = models.IntegerField(
        null=False
    )
    content = models.TextField(
        null=False
    )
    reg_date = models.TimeField(
        null=False
    )
    class Meta:
        db_table = 'counselor_review'