# from random import randint

# family = [
#   {"nome": "Bruno"},
#   {"nome": "Monica"},
#   {"nome": "João"}, 
# ]

# dice = randint(1,20)

# if dice == 1:
#     print('tirou 1')
# elif 2 <= dice <= 15:
#     print('tirou entre 2 e 15')
# elif 16 <= dice <= 19:
#     print('tirou entre 16 e 19')
# else:
#     print('tirou 20')

# restaurants = [
#     {"name": "Restaurante A", "nota": 4.5},
#     {"name": "Restaurante B", "nota": 3.0},
#     {"name": "Restaurante C", "nota": 4.2},
#     {"name": "Restaurante D", "nota": 2.3},
# ]

# filtered_restaurants = []
# min_rating = 3.0
# for restaurant in restaurants:
#     if restaurant["nota"] > min_rating:
#         filtered_restaurants.append(restaurant)
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# for index in range(5):
#     print(index)
    
    
# n = 10
# last, next = 0, 1
# while last < n:
#     print(last)
#     last, next = next, last + next
    
# languages = ['Python', 'Java', 'JavaScript']

# enumerate_prime = enumerate(languages)

# # converte um objeto enumerate em uma lista
# print(list(enumerate_prime))
# # Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# languages = ['Python', 'Java', 'JavaScript']

# for index, language in enumerate(['Python', 'Java']):
#     print(f'{index} - {language}')


# ex 12

number = 5
counter = 1
result = 1 

while counter <= number:
    result = result * counter
    counter += 1
    print(result)


# ex 13

ratings = [6,8,5,9,10]

for rating in ratings:
    print(rating * 10)


ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

print(new_ratings)

for rating in new_ratings:
    if rating % 3 == 0:
        print(f'{rating} é múltiplo de 3')
        

def soma(x,y):
    return x + y

print(soma(3,3))
print(soma(x=3,y=3))
