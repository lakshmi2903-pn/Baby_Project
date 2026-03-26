from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    # Core Details
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    rental_period = models.CharField(max_length=50, blank=True, null=True, help_text="e.g. One day, Monthly, 10 days")
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    image = models.ImageField(upload_to='products/')
    
    # Filter Fields (Matches your Sidebar)
    GENDER_CHOICES = [('Boy', 'Boy'), ('Girl', 'Girl'), ('Unisex', 'Unisex')]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    
    age_group = models.CharField(max_length=50) # e.g. "0-12m", "3-4y"
    brand = models.CharField(max_length=100)    # e.g. "Mothercare", "Babyhug"
    color = models.CharField(max_length=50)     # e.g. "Blue", "Red"
    
    # Extra Filters
    discount = models.IntegerField(default=0)   # e.g. 10 for 10%
    is_premium = models.BooleanField(default=False)
    collection = models.CharField(max_length=50, blank=True) # "Trending", "Fast Moving"

    def __str__(self):
        return self.name
