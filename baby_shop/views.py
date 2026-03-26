from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# --- 1. PRODUCT & CATEGORY VIEWS (Existing Logic) ---
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        'category__name', 
        'gender', 
        'age_group', 
        'brand', 
        'collection',    
        'is_premium',    
        'discount',
        'color',          
    ]

# --- 2. AUTHENTICATION VIEWS (New Login/Register Logic) ---

@api_view(['POST'])
def register_user(request):
    """Saves a new user to the Django 'auth_user' table"""
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"error": "Email and Password are required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=email).exists():
        return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)

    # Create user in database
    user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
    return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    """Checks if the user exists and the password is correct"""
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(username=email, password=password)
    
    if user is not None:
        return Response({
            "message": "Login successful",
            "user": {"name": user.first_name, "email": user.email}
        }, status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
