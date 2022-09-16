from django.db import models


# Create your models here.
class Counselor(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    email = models.CharField(
        max_length=45,
        null=False
    )
    password = models.CharField(
        max_length=45,
        null=False
    )
    name = models.CharField(
        max_length=20,
        null=False
    )
    avilable_time = models.CharField(
        max_length=10,
        null=False
    )
    certificate = models.CharField(
        max_length=100,
        null=False
    )
    subject = models.CharField(
        max_length=100,
        null=False
    )
    carreer = models.TextField(
        null=False
    )
    explanation = models.TextField(
        null=False
    )
    gender = models.CharField(
        max_length=10,
        null=False
    )

    class Meta:
        db_table = 'counselor'
