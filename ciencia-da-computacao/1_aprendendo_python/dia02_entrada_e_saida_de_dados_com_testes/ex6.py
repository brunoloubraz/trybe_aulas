import re
# 🚀 Exercício 6:
# Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪

# Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;

# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);

# O nome de usuário deve iniciar com uma letra;

# O nome do website deve conter somente letras e dígitos;

# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True.

def email_valido(email: str):
    regex_nome_usuario = r'^[a-zA-Z0-9_-]+$'
    # regex_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    regex_primeira_letra = r'^[a-zA-Z][a-zA-Z0-9_-]*$'
    regex_email = r'^[a-zA-Z0-9]+$'

    print((email.split('@')[1]).split('.')[1])
    if not re.match(regex_nome_usuario, email.split('@')[0]):
        raise ValueError("O nome de usuário deve conter somente letras, dígitos, traços e underscores (_)")

    if not re.match(regex_primeira_letra, email.split('@')[0]):
        raise ValueError("Deve iniciar com uma letra")
    
    if not re.match(regex_email,(email.split('@')[1]).split('.')[0]):
        raise ValueError("O nome do website deve conter somente letras e dígitos")
    # Verificando se o e-mail completo atende à regra
    # if not re.match(regex_email, email):
    #     raise ValueError("E-mail inválido.")

    if len((email.split('@')[1]).split('.')[1]) > 3:
        raise ValueError()
    else:
        return 'Valid email'
if __name__ == "__main__":
    print(email_valido('brunolou3@gmail.com'))