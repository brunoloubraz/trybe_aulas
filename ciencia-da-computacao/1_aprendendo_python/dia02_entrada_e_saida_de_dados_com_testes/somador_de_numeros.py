import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


# meuNum = 0

# while meuNum < 42:
#     meuNum += int(input('digite seu numero'))

print('Mais que 42')

print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42
print("Os resultados são", 6, 23, 42, sep=" - ")  # saída: Os resultados são * 6 * 23 * 42

err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

# ex 1

nome = input('Digite um nome a seguir: ')

for letter in nome:
    print(letter)

# ex 2
n = input('digite os numeros ao lado separando-os por espaços:')
nums = n.split(' ')
soma = 0

for item in nums:
    if not item.isdigit():
        print(f"Erro ao somar valores, {item} não é um dígito.")
    else:
        sum += int(item)

def numbers(n):
    total = 0

