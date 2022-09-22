# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Counsel(models.Model):
    reservation_date = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    counselor = models.ForeignKey('Counselor', models.DO_NOTHING, blank=True, null=True)
    member = models.ForeignKey('Member', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'counsel'


class Counselor(models.Model):
    avaliable_time = models.DateTimeField(blank=True, null=True)
    career = models.CharField(max_length=255, blank=True, null=True)
    certificate = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(unique=True, max_length=255)
    explanation = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    subject = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'counselor'

    def __str__(self):
        return str(self.id)

class CounselorReview(models.Model):
    content = models.CharField(max_length=255)
    reg_date = models.DateTimeField()
    score = models.IntegerField()
    counselor = models.ForeignKey(Counselor, models.DO_NOTHING, blank=True, null=True)
    member = models.ForeignKey('Member', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'counselor_review'



class FavoriteCounselor(models.Model):
    counselor = models.ForeignKey(Counselor, models.DO_NOTHING, blank=True, null=True)
    member = models.ForeignKey('Member', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'favorite_counselor'


class Member(models.Model):
    age = models.IntegerField(blank=True, null=True)
    email = models.CharField(unique=True, max_length=255)
    gender = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255)
    nickname = models.CharField(unique=True, max_length=255)
    profile_image = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'member'

    def __str__(self):
        return str(self.id)
