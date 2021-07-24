from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.forms import UserCreationForm
from rest_framework.response import Response
from django.contrib.auth.models import User


@api_view(['POST'])
def register(request):
    data = request.data
    print(data)
    user = User.objects.create_user(data['username'], data['email'], data['password'])
    user.save()
    return Response(status=status.HTTP_201_CREATED)
