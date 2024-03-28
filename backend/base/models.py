from django.db import models

# Create your models here.
from django.contrib.auth.models import User 

class Employee(models.Model):
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True) #models.SET_NULL -> if parent is deleted then children not deleted and null=False=> can be empty
    name = models.CharField(max_length=200,null=True,blank=True)
    image =models.ImageField(null=True,blank=True)
    designation = models.CharField(max_length=200,null=True,blank=True)
    phone = models.IntegerField(null=True,blank=True,default=0)
    email = models.CharField(max_length=200,null=True,blank=True)
    id = models.AutoField(primary_key=True,editable=False)
    def __str__(self) -> str:
        return self.name
    
