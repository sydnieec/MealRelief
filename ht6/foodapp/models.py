from django.db import models
from django.contrib.auth.models import User  # added


# Create your models here.
class FoodProvider(models.Model):
    owner = models.ForeignKey(
        User, related_name="foodprovider", on_delete=models.CASCADE, null=True)
    restaurant = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    address = models.CharField(max_length=100)
    food = models.CharField(max_length=100)
    image = models.TextField(
        max_length=10000,
        default="https://w0.pngwave.com/png/554/203/restaurant-computer-icons-food-menu-menu-png-clip-art.png",
        null=True
    )
    description = models.CharField(max_length=500, blank=True)
    servings = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)