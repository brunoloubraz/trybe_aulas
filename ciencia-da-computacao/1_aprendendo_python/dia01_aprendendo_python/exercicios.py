# 1
def returnBigger(x1, x2):
    if x1 > x2:
        return x1
    else:
        return x2


print(returnBigger(110, 20))

# 2
def calculaMedia(list):
    total = 0
    for item in list:
        total += item
    return total/len(list)

print(calculaMedia([5,5,5]))

# 3

def quadrado(n):
    for item in range(n):
        print(n * '*')
    
quadrado(25)


# 4

def biggestname(listName): 
    biggest = listName[0]
    for name in listName:
        if len(biggest) < len(name):
            biggest = name
    return biggest
print(biggestname(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# 5
import math

def painting(wallSize):
    oneCanWillPaint = 54
    totalCans = math.ceil(wallSize / oneCanWillPaint)
    fullPrice = totalCans * 80
    return (totalCans, fullPrice)
  
print(painting(100))

# EXERCICIOS BONUS

# 2
def isTriangle(side1, side2, side3):
    if (side1 + side2) > side3 and  (side2 + side3) > side1 and  (side1 + side3) > side2:
        if side1 == side2 == side3:
            return 'triangulo equilátero'
        elif side1 != side2 and side2 != side3 and side3 != side1:
            return 'triângulo escaleno'
        elif side1 == side2 or side2 == side3 or side3 == side1:
            return 'triangulo isóceles'
    else:
        return False
    
    
def piramid(n):
    for index in range(n+1):
        print(index * '*')
    
piramid(5)

# 3

def somatoria(n):
    total = 0
    for item in range(n+1):
        total += item
    return total

print(somatoria(10))

# 4
def abastecimento(type, litros):
    gasPrice = 2.5
    alcoholPrice = 1.9
    if litros <= 20 and type == "G":
        return litros * (gasPrice - (gasPrice * 0.04))
    if litros > 20 and type == "G":
        return litros * (gasPrice - (gasPrice * 0.06))
    if litros <= 20 and type == "A":
        return litros * (alcoholPrice - (alcoholPrice * 0.03))
    if litros > 20 and type == "A":
        return litros * (alcoholPrice - (alcoholPrice * 0.05))

print(abastecimento('A', 30))