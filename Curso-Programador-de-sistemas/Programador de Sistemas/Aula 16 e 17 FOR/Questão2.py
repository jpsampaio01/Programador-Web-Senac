"""Somando Números de 1 a N Escreva um programa em Python que solicite ao usuário um número N e, em
seguida, utilize um loop for para calcular a soma de todos os números de 1 a N."""

n = int(input("Escreva o valor de N: "))
soma = 0
for i in range (1, n+1):
    soma += i
print(f"O valor total da soma de 1 ate {n} é {soma}")
