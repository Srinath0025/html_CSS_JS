from django.shortcuts import render,HttpResponse

# Create your views here.
def home(req):
    return render(req,'home.html')

def about(req):
    return HttpResponse("<h1>My AboutPage</h1>")
