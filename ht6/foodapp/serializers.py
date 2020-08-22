from rest_framework import serializers
from .models import FoodProvider

class FoodProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodProvider
        fields = '__all__'