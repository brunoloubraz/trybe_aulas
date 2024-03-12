# def is_palindrome_recursive(word, low_index, high_index):
#     print(word)
#     print(len(word))
#     if len(word) == 1:
#         return True
#     if len(word) == 0:
#         return False
#     if len(word) > 2:
#         for letter in word:
#             if letter[0] == letter[-1]:
#                 result = word[1:-1]
#                 return is_palindrome_recursive(result,1,1)
            
# print(is_palindrome_recursive('gg', 1, 2))

# lol = 'BruUno'
# print(lol[0] == lol[1])

# print(lol.lower())

def sorting(s):
    if len(s) <= 1:
        return s

    meio = len(s) // 2
    esquerda = sorting(s[:meio])
    direita = sorting(s[meio:])

    return merging(esquerda, direita)

def merging(esquerda, direita):
    resultado = []
    i = j = 0

    while i < len(esquerda) and j < len(direita):
        if esquerda[i] < direita[j]:
            resultado.append(esquerda[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1

    resultado.extend(esquerda[i:])
    resultado.extend(direita[j:])
    return resultado

def is_anagram(first_string, second_string):
    sorted_word1 = sorting(first_string.lower())
    sorted_word2 = sorting(second_string.lower())

    are_anagrams = sorted_word1 == sorted_word2

    return ''.join(sorted_word1), ''.join(sorted_word2), are_anagrams
  
print(is_anagram('',''))