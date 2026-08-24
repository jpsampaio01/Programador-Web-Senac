comb = float(input("Qual o nível de combustivel? "))
atmosfera = input("A atmosfera do planeta é respirável? ")
traje = float(input("Qual a integridade do trage? "))

if comb >= 15 and ((atmosfera == "sim" or atmosfera == "s") or traje == 100):
    print("Iniciando Protocolo de Pouso")
else:
    print("Pouso Abortado:Risco de Morte")