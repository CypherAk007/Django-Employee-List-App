from django.urls import path 
from . import views

urlpatterns =[
    path('',views.getRoutes,name='routes'),
    path('employees',views.getEmployees,name='employees'),
    path('employee/<int:pk>/',views.getEmployee,name='Employee'),
]