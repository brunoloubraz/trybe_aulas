# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0]
# resultado = 4

class system:
    def __init__(self):
        self.data = 0

    def count(self, arr):
        max_time = 0
        actual_time = 0
        for item in arr:
            if item == 1:
                actual_time += 1
            elif item == 0 and actual_time > max_time:
                max_time = actual_time
                actual_time = 0
            else:
                actual_time = 0 
        return max_time
                


array = system()

print(array.count(valores_coletados))

print(array)