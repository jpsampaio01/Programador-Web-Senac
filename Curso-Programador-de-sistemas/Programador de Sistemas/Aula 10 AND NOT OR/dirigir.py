carteira = input("Possui carteira? ")
idade = int(input("Qual sua idade? "))

if carteira == "sim" and idade >= 18:
    print("Pode dirigir!")
else:
    print("Não pode")