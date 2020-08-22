from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import FoodProviderSerializer
from .models import FoodProvider


class FoodProviderViewSet(viewsets.ModelViewSet):
    queryset = FoodProvider.objects.all().order_by('name')
    serializer_class = FoodProviderSerializer