# -*- coding: utf-8 -*-
import sys

from django.http import HttpResponse, HttpRequest, HttpResponseServerError, Http404
from django.shortcuts import render_to_response, redirect

from wordcard.models import Card

def index(request):
  return render_to_response("main.html", {"cards" : Card.objects.all().order_by('?')})