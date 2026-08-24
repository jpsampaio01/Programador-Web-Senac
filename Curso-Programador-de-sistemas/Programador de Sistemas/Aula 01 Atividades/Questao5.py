valor_hora = float(input("Quanto você ganha por hora? R$ "))
horas_mes = float(input("Quantas horas você trabalha no mês? "))

salario_bruto = valor_hora * horas_mes

ir = salario_bruto * 0.11
inss = salario_bruto * 0.08
sindicato = salario_bruto * 0.05
salario_liquido = salario_bruto - ir - inss - sindicato
print("Salário Bruto: R$", salario_bruto)
print("IR (11%): R$", ir)
print("INSS (8%): R$", inss)
print("Sindicato (5%): R$", sindicato)
print("Salário Líquido: R$", salario_liquido)



