# def saudacao():
#     print("Oi")

# def despedida():
#     print("Tchau")

# def init():
#     print("Inicio")
#     saudacao()
#     print("Fim")
#     despedida()

# init()

# exercicio

def somatoria(n):
    if n == 0:
        return n
    else:
        return n + somatoria(n-1)

print(somatoria(5))