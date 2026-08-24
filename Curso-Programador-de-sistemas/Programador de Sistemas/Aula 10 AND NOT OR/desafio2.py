escolha = int(input("Escolha uma rota de fuga: ponte da cidade(1) ou túnel subterraneo(2): "))

if escolha == 1:
    veiculo = input("Possui veiculo blindado? ")
    ponte = input("A ponte está intacta? ")
    if(veiculo == "sim" or veiculo == "s") and (ponte == "sim" or ponte == "s"):
       print("Você venceu!")
    else:
        print("Você perdeu!")
elif escolha == 2:
    mascara = input("O grupo possui máscara de gás? ")
    cartao = input("Possui cartão de acesso? ")
    if(mascara == "sim" or mascara == "s") and (cartao == "sim" or cartao == "s"):
        print("Você venceu!")
    else:
        print("Você perdeu!")
else:
    print("Opcão inválida!")


