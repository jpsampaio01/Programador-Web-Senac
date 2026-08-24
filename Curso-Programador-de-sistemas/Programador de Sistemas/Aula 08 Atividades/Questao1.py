ano_nascimento = int(input("Digite seu ano de nascimento: "))
idade_atual = 2026 - ano_nascimento
if idade_atual >= 16:
    print("Pode votar este ano!")
else:
    print("Não pode votar este ano!")