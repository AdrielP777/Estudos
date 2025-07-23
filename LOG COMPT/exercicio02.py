A = True
B = True
print("A \tb\t A nand B")
print("-"*30)
resultado = not (A and B)
print(f"{A}\t{B}\t{resultado}")

A = True
B = False
resultado = not (A and B)
print(f"{A}\t{B}\t{resultado}")


A = False
B = True
resultado = not (A and B)
print(f"{A}\t{B}\t{resultado}")

A = False
B = False
resultado = not (A and B)
print(f"{A}\t{B}\t{resultado}")



