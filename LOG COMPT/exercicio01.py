#Escreva um programa que peça ao usuário
#dois valores booleanos e mostre:
#- AND, OR, NOT A, NOT B

#exemplo de leitura de dados
nome = input("Digite seu nome")
print("bom dia",  nome)

a = input("Digite true ou false").lower()=="true"
b = input("Digite true ou false").lower()=="true"
print("a and b ", a and b)
print("a or b", a or b)
print("not a", not a)
print("not b", not b)
