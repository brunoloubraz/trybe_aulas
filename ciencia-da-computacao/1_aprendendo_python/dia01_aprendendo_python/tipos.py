a = 5
b = 5.0

print(type(a))
print(type(b))

fruits = ['laranja', 'maça', a]
print(fruits[0])
fruits.append('abacate')
print(fruits)

eu = ('bruno', 25)
pessoas = [eu]
lista = ['Monica', 'joao', 'felipe']
pessoas.extend(
    [
          (lista[0], 60),
          (lista[1], 65),
          (lista[2], 31),
    ]
)
print(pessoas)

jogador = {
    "nome": "Bruno",
    "cidade": "São Paulo"
}

print(jogador["nome"])
print(jogador)

admin_user = {'Bruno', 'Karina'}
users = {'Geisy', 'Marcos', 'Bruno'}

print(admin_user.intersection(users))

allUsers = {'Bruno', 'Karina', 'Geisy', 'Marcos'}

print(allUsers.difference(admin_user))

print(admin_user.union(allUsers))

# ex 5 e 6

minha_lista = []
minha_lista.append('Ciência da computação')
print(minha_lista)
minha_lista[0] = "fundamentos"
print(minha_lista)

# ex 7

va = set()
va.add('brunobruno')
print(va)

# ex 8 e 9

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info['recorrente'] = 'Sim'
info.pop('origem')
print(info)

# ex 10

user = {
  "nome": "Thiago",
  "sobrenome": "Nobre",
  "idade": 29
}

print(user.values())


my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")
