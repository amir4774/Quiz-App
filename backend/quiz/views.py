from .models import Exam
from .serializer import ExamSerializer , UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.authentication import JWTAuthentication 
from .serializer import UserSerializer


class Exam_get_post(generics.ListCreateAPIView):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer
    permission_classes = (AllowAny,)

#put and delete and detail 
class Exam_put_delete_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer
    

User = get_user_model()

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    authentication_classes = [JWTAuthentication]




