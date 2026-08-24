"""Escreva um programa em Python que solicite ao usuário um número e, em seguida, utilize um loop for para
imprimir a tabuada desse número de 1 a 10."""

num = int(input("Digite um valor para saber a tabuada: "))
for i in range(1,11):
    print(f"{num} x i {i} = {num*i }")