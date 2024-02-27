def create_phone_number(n):
    variable = [str(item) for item in n ]
    response = []
    for word in variable:
        if len(response) == 0:
            response.append('(')
            response.append(word)
        elif len(response) == 4:
            response.append(')')
            response.append(' ')
            response.append(word)
        elif len(response) == 9:
            response.append('-')
            response.append(word)
        else:
            response.append(word)
    return ''.join(response)
    

def create_phone_number(n):
	return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

print(create_phone_number([0, 2, 3, 0, 5, 6, 0, 8, 9, 0]))

fruits = ["banana", "apple", "grape"]

for element in enumerate(fruits):
    print(element)
    
def func(*args):
    print([arg for arg in args])
    
func([1,2])
