#ex 1
import random


def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()

# random_answer = random.choice(['Bruno', 'Monica', 'Joao', 'Felipe'])
random_answer = []
with open('ex3.txt', mode='r') as file:
    for name in file:
        random_answer.append(name.strip())
nameChosen = random.choice(random_answer)

# 2 e #3
def scrambleWord():
    counter = 0
    while counter < 5:
        shuffled_word = ''.join(random.sample(nameChosen, len(nameChosen)))
        print(shuffled_word)
        answer = input ('Qual palavra esta escrito anteriormente? ')
        if (answer.lower() == nameChosen.lower()):
            print('Parabens voce acertou!')
            break
        else: 
            print('Palavra incorreta')   
            counter += 1










if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
    scrambleWord()
