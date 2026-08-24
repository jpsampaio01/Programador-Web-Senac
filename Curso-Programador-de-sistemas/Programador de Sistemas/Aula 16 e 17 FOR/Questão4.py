"""Questão do fatorial"""
num = int(input("Qual fatorial você quer? "))
resultado = 1
for i in range(1, num + 1):
    resultado *= i

print(f"O fatorial de {num} é {resultado}")
