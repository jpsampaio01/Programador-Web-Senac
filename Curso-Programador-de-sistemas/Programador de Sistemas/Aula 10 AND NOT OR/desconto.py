valor_compra = float(input("Digite o valor da compra: "))
vip = input("É cliente vip? ")
desconto = valor_compra * 0.90   #desconto de 10%
if valor_compra >= 100 or vip == "sim":
    print(f"Possui desconto! O valor com desconto é: R${desconto}")
else:
    print(f"Não possui desconto! O valor sem desconto é: R$ {valor_compra}")