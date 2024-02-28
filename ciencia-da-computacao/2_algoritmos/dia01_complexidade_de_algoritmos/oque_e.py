import random

numbers = [random.randint(1, 100) for _ in range(10000000)]

def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum

print(sum_array(numbers))