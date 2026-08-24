idade = int(input("Qual a sua idade? "))
titulo = str(input("Possui titulo? "))

if idade >= 16 and titulo == "sim":
    print("Pode votar!")
else:
    print("Não pode!")