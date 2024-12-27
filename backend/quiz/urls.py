from django.urls import path
from .views import *
from .views import UserRegistrationView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('exam/',Exam_get_post.as_view(),name='one'),
    path('exam/detail/<int:pk>/',Exam_put_delete_detail.as_view(),name='two'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
