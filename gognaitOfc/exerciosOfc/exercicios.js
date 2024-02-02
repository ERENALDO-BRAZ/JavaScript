
//                                   EXERCICIO VISITANDO NOVAS CIDADES






// const nome = prompt("qual seu nome?");
// let cidades = "";
// let contagem = 0;

// let continuar = confirm("voce ja visitou alguma cidade? Sim/Não.");

// while(continuar === true) {
   
//    let cidade = prompt("qual o nome da cidade visitada?");
   
//    cidades += " - " + cidade + "\n"
//    contagem++ 
//    continuar = confirm("voce visitou alguma outra cidade? Sim/Não");
//    console.log(cidade);
// }

// alert(
//   "Nome do Turista: " + nome + 
//   "\nQuantidade de Cidades visitadas: " + contagem  + 
//   "\nNome das Cidades visitadas:\n" + cidades
// );

// console.log(nome);
// console.log(contagem);
// console.log(continuar);







// //                                        MENU INTERATIVO




// let opcoesDoMenu = "5"

// do{
//  opcoesDoMenu = parseFloat(prompt(
//  "escolha uma opcão:" +
//  "\n1: Falar com um assistente." + 
//  "\n2: Pagar boleto." +
//  "\n3: Financeiro." +
//  "\n4: Desbloqueio de confianca." +
//  "\n5: Encerrar."
//   )
//   );


//   switch (opcoesDoMenu){
//     case 1: 
//     alert("voce selecionou a opcão: " + "(" + opcoesDoMenu + ")" + " 'Falar com um assistente.'")
//     alert("Agora você está sendo direcionado para um assistente disponivel...")
//     break
   
//     case 2:
//     alert("voce selecionou a opcão: " + "(" + opcoesDoMenu + ")" + " 'Pagar boleto.'")
//     alert("Agora vamos lhe enviar o boleto de pagamento.")
//     break
    
//     case 3:
//     alert("voce selecionou a opcão: " + "(" + opcoesDoMenu + ")" + " 'Financeiro.'")
//     alert("Voce sera direcionado para a aba Financeiro...")
//     break

//     case 4:
//     alert("voce selecionou a opcão: " + "(" + opcoesDoMenu + ")" + " 'Desbloqueio de confianca.'")
//     alert("Sua internet sera desbloqueada por 5 dias, caso voce não pague dentro desse prazo ela sera cancelada, e só poderar usar o desbloqueio de confiaca após 2 meses.")
//     break

//     case 5:
//     alert("Voce escolheu a opcao: " + "(" + opcoesDoMenu + ")")
//     alert("finalizando atendimento...")
//     break
    
//     default:
//     alert("voce colocou uma opcao invalida!")
//   }

// } while (opcoesDoMenu !== 5);









//                                           BANCO DIGITAL






let dinheiro = parseFloat(prompt("qual a quantidade de dinheiro no banco?"));

let opcoesDoBanco = 3;
let adcionarOuRemoverDinheiro = 0;
let removerDinheiro = 0;
let resuldado;
let boleano; 
do {

  opcoesDoBanco = parseFloat(prompt(
  "Escolha umas das opcoes abaixo" +
  "Saldo disponivel: " + dinheiro + "$" +
  "\n1: adicionar dinheiro" + 
  "\n2: remover dinheiro" +
  "\n3: sair"
  )
  );
  
  switch(opcoesDoBanco){
    case 1:
    adcionarOuRemoverDinheiro += parseFloat(prompt("quanto de dinheiro quer adicionar?"))
    resuldado = dinheiro + adcionarOuRemoverDinheiro 
    alert("voce estava com: " + dinheiro + "\nvoce adicionou: " + adcionarOuRemoverDinheiro + " Reais" + "\n Agora voce está com: " + resuldado + " Reias")
   break
  
   case 2:
    adcionarOuRemoverDinheiro = parseFloat(prompt("quanto de dinheiro quer remover?"))
    resuldado = dinheiro -= adcionarOuRemoverDinheiro
    alert("voce estava com: " + dinheiro + "\nvoce removeu: " + adcionarOuRemoverDinheiro + " Reais" + "\n Agora voce está com: " + resuldado + " Reias")
   break
  
   case 3: 
   alert("voce esta saindo do banco, obrigado por nos escolher!")
   break
    
   default: 
   alert("voce colocou a espressao incorreta")
  }  

}while (opcoesDoBanco !== 3);
