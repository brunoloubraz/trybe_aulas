import pytest
from ex6 import email_valido

def is_valid():
    assert email_valido('brunolou3@gmail.com') == "Valid email"
    assert email_valido('?brunolou3@gmail.com') == ValueError("O nome de usuário deve conter somente letras, dígitos, traços e underscores (_)")
    assert email_valido('3@gmail.com') == ValueError("Deve iniciar com uma letra")
    assert email_valido('brunolou3@gma1!il.com') == ValueError("O nome do website deve conter somente letras e dígitos")
    assert email_valido('brunolou3@gmail.come') == ValueError("O tamanho máximo da extensão é de 3 caracteres")