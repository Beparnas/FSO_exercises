#in Python

class arto:
	name:str = "Arto Hellas"
	age:int = "35"
	education:str = "PhD"
	def greet():
		print(f'hello,my name is {arto.name}')

arto.greet() #"hello, my name is Arto Hellas" gets printed
referenceToGreet = arto.greet
referenceToGreet() #this actually works in python?