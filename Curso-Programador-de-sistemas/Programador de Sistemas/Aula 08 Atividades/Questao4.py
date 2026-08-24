altura = float(input("Qual sua altura? "))
sexo = str(input("Qual seu sexo? (1:feminino 2:masculino): "))

peso_ideal1 = (72.7 * altura) - 58
peso_ideal2 = (62.1 * altura) - 44.7

if sexo == 1:
    print(f"Seu peso ideal é: {peso_ideal1}")
else: 
    print(f"Seu peso ideal é: {peso_ideal2}")