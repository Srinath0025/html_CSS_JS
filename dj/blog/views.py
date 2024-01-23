from django.shortcuts import render,HttpResponse

# Create your views here.
def home(req):
    return render(req,'home.html',{"name":"Srinath"})

def about(req):
    return render(req,'about.html')
