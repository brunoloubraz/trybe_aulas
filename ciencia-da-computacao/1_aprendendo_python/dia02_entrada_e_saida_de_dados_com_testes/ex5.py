# Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪

# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.

# Exemplo: 3 -> [1, 2, "Fizz"].


def fizz(lizz: list):
    new_list =[]
    for number in lizz:
        if number % 3 == 0 and number % 5 == 0:
            new_list.append('FizzBuzz')
        elif number % 3 == 0:
            new_list.append('Fizz')
        elif number % 5 == 0:
            new_list.append('Buzz')
        else:
            new_list.append(number)
    return new_list


if __name__ == "__main__":
    print(fizz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))