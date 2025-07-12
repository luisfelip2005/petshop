from .models import User, Product, Appointment, AppointmentHour
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class AppointmentHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppointmentHour
        fields = '__all__'