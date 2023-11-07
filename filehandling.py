##file=open("blabla.txt",'w')
##file.write("i\'m srinath")
##file.close()


##file=open("run.txt",'a')
##file.write("how r u \n")
##file.close()

name=("srinath")
age=25
email=("srinath@gmail.com")
file=open("info.txt",'a')
file.write(f"my name\'s {name},i\'m {age}years old. this is my email\"{email}\" \n")
file.close()
