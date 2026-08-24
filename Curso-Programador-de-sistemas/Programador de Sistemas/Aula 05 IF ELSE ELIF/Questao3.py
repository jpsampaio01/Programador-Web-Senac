"""Escreva um código em python que verifique se o usuário pode ou não
votar indicando quando o voto for facultativo."""
idade = int(input("Qual a sua idade? "))
if idade >= 70 and 16:
    print("Voto facultativo")
elif idade >= 18:
    print("Voto obrigatótio")
else:
    print("Não pode votar")