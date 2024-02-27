import pytest
from ex5 import fizz

def testa_se_retorna_fizz():
    'Deve retornar uma lista os itens com numeros mas tambem com Fizz , Buzz e FizzBuzz'
    assert fizz([1,2,3]) == [1,2,'Fizz']
    assert fizz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
    assert fizz([5]) == ['Buzz']
    assert fizz([15]) == ['FizzBuzz']
    