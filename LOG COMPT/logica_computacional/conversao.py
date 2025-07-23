num = int(input("Digite um numero inteiro em decimal "))
binario = bin(num)[2:]
octal = oct(num)[2:]
hexadecimal = hex(num)[2:].upper()
print(f"{num} em decimal ")
print(f"Binario.... = {binario}")
print(f"Octal...... = {octal}")
print(f"Hexadecimal = {hexadecimal}")
print("-------- FIM ---------")
