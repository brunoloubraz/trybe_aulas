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

# 6
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
    
print(isTriangle(3,3,123))