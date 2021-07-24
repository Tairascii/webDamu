from django.urls import path, re_path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import register
urlpatterns = [
    path('auth/login/', obtain_jwt_token),
    path('auth/register/', register)
]