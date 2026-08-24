"""Crie um jogo simples em que o programa escolhe um número aleatório entre 1 e 10, e o usuário tenta adivinhar qual é
esse número. O programa deve informar se o número digitado é maior ou menor que o número escolhido, até que o
usuário acerte."""

import random
while True:
    numero_secreto = random.randint(1, 10)
    print("Bem-vindo ao jogo de advinhação!")
    print("Estou pensando em um número entra 1 e 10. Tente advinhar!")
    acertou = False
    while not acertou:
        # solicita um palpite ao usuário
        palpite = int(input("Digite o seu palpite: "))
        # Verifica se o palpite está correto
        if palpite < numero_secreto:
            print("O número é maior. Tente novamente. ")
        elif palpite > numero_secreto:
            print("O número é menor. Tente novamente.")
        else:
            print("Parabéns! Você acertou o número!")
            acertou = True
