from typing import List

def pares(n:List[int]) -> int:
    listagem = []
    for number in n:
        if number % 2 == 0:
            listagem.append(number)
    return len(listagem)
            

print(pares([1,2,3,4,6,7,8,9,10]))

# ex2

def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n-1)
    else:
        return conta_pares(n-1)

print(conta_pares(10))



def contar_pares_recursivamente(n: List[int]) -> int:
    if not n:  # Caso base: quando a lista está vazia, retorna 0.
        return 0
    else:
        return (n[0] % 2 == 0) + contar_pares_recursivamente(n[1:])

# Exemplo de uso
print(contar_pares_recursivamente([1, 2, 3, 4, 6, 7, 8, 9, 10]))

def teste_par(n: List[int]) -> int:
    if len(n) == 0:
        return 0
    else:
        return (n[0] % 2 == 0) + teste_par(n[1:])

print(teste_par([1, 2, 3, 4, 6, 7, 8, 9, 10]))