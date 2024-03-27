from django.shortcuts import render

# Create your views here.
# django rest framwork 
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/employees',
        '/api/employees/<id>',
    ]
    return Response(routes)