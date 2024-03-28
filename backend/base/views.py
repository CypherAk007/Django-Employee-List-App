from django.shortcuts import render

# Create your views here.
# django rest framwork 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EmployeeSerializer
# from .employees import employees
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/employees',
        '/api/employee/<id>',
    ]
    return Response(routes)

from .models import Employee
@api_view(['GET'])
def getEmployees(request):
    employees = Employee.objects.all()
    serializer = EmployeeSerializer(employees,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getEmployee(request,pk):
    employee = Employee.objects.get(id=pk)
    serializer = EmployeeSerializer(employee,many=False)
    return Response(serializer.data)
