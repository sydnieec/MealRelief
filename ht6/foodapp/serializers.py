from rest_framework import serializers
from .models import FoodProvider, ClaimCodes

class FoodProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodProvider
        fields = '__all__'

class ClaimCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimCodes
        fields = '__all__'