from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import FoodProviderSerializer, ClaimCodeSerializer
from .models import FoodProvider, ClaimCodes


class FoodProviderViewSet(viewsets.ModelViewSet):
    queryset = FoodProvider.objects.all()
    serializer_class = FoodProviderSerializer

class ClaimCodesViewSet(viewsets.ModelViewSet):
    queryset = ClaimCodes.objects.all()
    serializer_class = ClaimCodeSerializer