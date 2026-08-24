"""Escreva um programa que solicite ao usuário um número inteiro positivo e, em seguida, faça uma contagem regressiva
desse número até zero."""

num = int(input("Digite um número inteiro positivo: "))

while num >= 0:
    print (num)
    num = num - 1
print("FIM")
