let saldo = prompt("Informe quanto de dinheiro possui:")

let acao = ""

saldo = parseFloat(saldo )

do{
  acao = prompt("Seu saldo atual é: " + saldo +
  "\nEscolha uma acao:" +
  "\n1 - Depositar" +
  "\n2 - Sacar" +
  "\n3 - Sair")
  switch(acao){
    case "1":
      saldo += parseFloat(prompt("Qual valor quer depositar? "))
      break
    case "2":
      saldo -= parseFloat(prompt("Qual valor quer sacar? "))
      break
  }

}while (acao !== "3")
