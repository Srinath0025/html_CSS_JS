class Bike():
    model="fire blade 1000"
    brand="honda CBR"
    def sports(self):
        print("Ride honda")
user=Bike()
user.sports()
print(user.model)
print(user.brand)

print("................................")

class Dog():
    breeds="malinos"
    age=2
    color="black"
    def pet(self):
        print("Fun")
user=Dog()
user.pet()
print(user.breeds)
print(user.age)
print(user.color)

print(".................................")

#Class

class Watch():
    def __init__(self,b,m,s):
        self.brand=b
        self.model=m
        self.since=s
    def manufacturer(self):
        print(f"{self.brand} old brand watches")
a=Watch("masarati","v8auto",1914)
b=Watch("casio","Edifice",1946)

a.manufacturer()
##b.manufacturer()

print(a.brand,a.model,a.since)
##print(b.brand,b.model,b.since)
































            


