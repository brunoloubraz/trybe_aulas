characters_file = open("meus-personagens-favoritos.txt", mode="w")

characters_file.write('Tio Patinhas\n')
characters_file.write('Mickey\n')
characters_file.write('thor\n')

print('Batman', file=characters_file)

more_characters = ['Sonho\n', 'Ash\n']

characters_file.writelines(more_characters),

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
characters_file.writelines(LINES)

characters_file.close()

with open("meus-personagens-favoritos.txt", "r") as file:
    for line in file:
        print(line)  