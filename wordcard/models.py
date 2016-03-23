# -*- coding: utf-8 -*-
import json
from django.db import models

# Create your models here.
class Card(models.Model):
  question = models.CharField(max_length=50)
  pronounce = models.CharField(max_length=50)
  attribute = models.CharField(max_length=50)
  wordType = models.CharField(max_length=50)
  startTime = models.CharField(max_length=50)
  duration = models.CharField(max_length=50)