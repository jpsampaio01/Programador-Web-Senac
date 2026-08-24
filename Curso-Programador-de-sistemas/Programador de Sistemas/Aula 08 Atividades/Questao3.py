macas_compradas = float(input("Quantas maçãs foram compradas? "))
macas = 0.30
duzia = 0.25
valor_macas = macas * macas_compradas 
valor_duzia = duzia * macas_compradas
if macas_compradas < 12:
    print(f"Valor total da compra: {valor_macas}")
else:
    print(f"Valor total da compra: {valor_duzia}")