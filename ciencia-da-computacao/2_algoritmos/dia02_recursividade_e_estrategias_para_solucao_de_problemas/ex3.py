from typing import List

# def biggest_num(numbers:List[int]) -> int:
#     if len(numbers) == 0:
#         return 0
#     # elif:
        
#     #     return biggest_num(numbers[1:])
#     else:
#         return biggest_num(numbers[1:])

# print(biggest_num([10,543,223,219,322,4,2,13,4,656,43,4,]))


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))