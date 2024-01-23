from django.shortcuts import render,HttpResponse

# from .MCQ_data import MCQ as questions
from .db import MCQcol

# Create your views here.
def home(req):
    return render(req,"hello.html",{"name":"Srinath","skill":["Python","java","Dart","Flutter"],"age":18})

def about(req):
    return render(req,"about.html",{"area":"welcome to our developer area","learn":{"HTML","CSS","Javascript","web"},"age":20})

def details(req):
     return render(req,"details.html")

def MCQ(req):
    return render(req,"MCQ.html",{"questions":MCQcol.find()})


