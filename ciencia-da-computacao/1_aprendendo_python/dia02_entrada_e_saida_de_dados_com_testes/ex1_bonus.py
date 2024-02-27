import json
import random

def pokeguesses():
    poke_names = []
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
    for pokemon in pokemons:
        poke_names.append(pokemon["name"])
    random_pokemon = random.choice(poke_names)
    print(random_pokemon)
    acc = 0
    while acc < len(random_pokemon):
        print(f'Tentativas {acc + 1} de {len(random_pokemon)}')
        word_tip = []
        for n in range(acc):
            word_tip.append(random_pokemon[n])
        print(''.join(word_tip))
        response = input('Digite ao lado o nome do pokemon: ')
        if response.lower() == random_pokemon.lower():
            print(f'Resposta correta!!!! O pokemon era: {response}')
            break
        else:
            acc += 1
        if acc == len(random_pokemon):
            print('VOCE PERDEU')
            break
        print('Tente novamente!')

if __name__ == "__main__":
    pokeguesses()