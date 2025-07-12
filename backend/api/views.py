from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response
from .models import User, Product, Appointment, AppointmentHour
from .serializers import UserSerializer, AppointmentHourSerializer, ProductSerializer, AppointmentSerializer, AppointmentHour

# Create your views here.
class AllUsersView(APIView):
    def get(self, request):
        usersData = User.objects.all()
        users = UserSerializer(usersData, many=True)
        return Response(users.data)
            

class RegisterUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            confirmPassword = request.data.get("confirmPassword")
            password = request.data.get("password")
            email = serializer.data.get('email')
            emailExists = User.objects.filter(email=email).exists()
            
            if not emailExists:
                if confirmPassword == password:
                    user = User.objects.create(**serializer.data)
                    user.hashPassword()
                    user.save()
                    return Response({'msg': 'User created'}, status=status.HTTP_201_CREATED)
                else:
                    return Response({'msg': 'Passwords are not equal!'}, status=status.HTTP_400_BAD_REQUEST)
                    
            else:
                return Response({'msg': 'email already exists'}, status=status.HTTP_400_BAD_REQUEST)
            
        else:
            return Response({'msg': 'Fill all fields'}, status=status.HTTP_400_BAD_REQUEST)
            
class LoginUser(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = User.objects.filter(email=email).first()
        print(user)
        if user:
            if user.checkPassword(password):
                return Response({"msg": "User logged in!"}, status=status.HTTP_200_OK)
            else:
                return Response({"msg": "wrong password!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"msg": "User doesn't exists!"}, status=status.HTTP_400_BAD_REQUEST)

class AllProducts(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class AppointmentsListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentsGetUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentsHourView(APIView):
    def get(self, request):
        date = request.GET.get('date')
        hours = AppointmentHour.objects.raw("""
            SELECT id, hour 
            FROM api_appointmenthour h 
            WHERE h.hour NOT IN (
                SELECT TIME(a.datetime) 
                FROM api_appointment a 
                WHERE DATE(a.datetime) = %s
            );
        """, [date])

        serializer = AppointmentHourSerializer(hours, many=True)
        return Response(serializer.data)