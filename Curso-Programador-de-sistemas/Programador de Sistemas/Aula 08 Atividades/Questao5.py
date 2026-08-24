"""Faça um programa que informe se a pessoa pode ou 
não pilotar uma moto, ela deve ser maior de idade e ter a carteira"""
idade = int(input("Qual a sua idade? "))
carteira = str(input("Possui carteira? (s)sim (n)não: "))

if idade >= 18 and carteira == "s":
    print("Pode pilotar!")
else:
    print("Não pode pilotar!")
