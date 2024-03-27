from django.shortcuts import render

# Create your views here.
# django rest framwork 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .employees import employees
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/employees',
        '/api/employees/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def getEmployees(request):
    return Response(employees)

@api_view(['GET'])
def getEmployee(request,pk):
    employee = None 
    for i in employees:
        if i['id']==pk:
            employee = i 
            break
    return Response(employee)