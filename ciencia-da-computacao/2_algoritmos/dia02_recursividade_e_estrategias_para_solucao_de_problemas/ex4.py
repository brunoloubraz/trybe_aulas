x = 7
print(range(x)[-1])

# def mdc(n1,n2):
#     if len(range(n1)) == 0 or len(range(n2)) == 0:
#         return 0
#     else:
#         print(f'n1: {n1}')
#         print(f'n2: {n2}')
#         if ((n1 / range(n1)[-1] == 0) and (n2 / range(n2)[-1] == 0)):
#             return range(n1)[0]
#         return mdc(len(range(n1)[:-1]), len(range(n2)[:-1]))
    

def mdc(n1, n2):
    if n2 == 0:
        return n1
    else:
        return mdc(n2, n1 % n2)
    
print(mdc(12,18))

