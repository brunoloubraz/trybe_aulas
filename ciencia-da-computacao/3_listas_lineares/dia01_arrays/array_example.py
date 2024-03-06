import sys

class ListaArray:
  def __init__(self):
    self.data = []
  
  def __len__(self):
    return len(self.data)
  
  def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

  def get(self, index):
      # recupera o elemento no índice informado
      return self.data[index]

  def set(self, index, value):
      # insere um elemento no índice informado
      self.data.insert(index, value)

  def remove(self, index):
      # removeremos o item, retornando-o
      return self.data.pop(index)
  
  def update(self, index, value):
      self.data[index] = value


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)
print(array)

# ...
# array = ListaArray()
array.set(0, "Marcos")
array.set(1, "Patrícia")
print(array)  # saída: ['Marcos', 'Patrícia']

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley

array.update(2,10)
print(array)

print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1