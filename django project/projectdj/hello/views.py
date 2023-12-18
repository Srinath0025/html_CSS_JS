from django.shortcuts import render,HttpResponse

# Create your views here.
def home(req):
    return render(req,"hello.html")

def signup(req):
    return render(req,"login.html")

def details(req):
    return render(req,"details.html")
