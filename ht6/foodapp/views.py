from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import FoodProviderSerializer
from .models import FoodProvider


class FoodProviderViewSet(viewsets.ModelViewSet):
    queryset = FoodProvider.objects.all()
    serializer_class = FoodProviderSerializer