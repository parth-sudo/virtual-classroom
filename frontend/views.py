from django.shortcuts import render
from api.models import Teacher

# Create your views here.

def index(request, *args, **kwargs):
    context = {'teacher' : Teacher.objects.all()}
    return render(request, 'frontend/index.html', context)
