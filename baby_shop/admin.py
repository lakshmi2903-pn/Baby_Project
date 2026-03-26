from django.contrib import admin
from .models import Category, Product  # Import your models here

# Register your models so they show up in the admin site
admin.site.register(Category)
admin.site.register(Product)
