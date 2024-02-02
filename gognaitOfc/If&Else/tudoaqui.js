/*                                                 PRIMEIRO PROJETO                                                   */

//PERGUNTAS RAPIDAS

const quiz = confirm("voce quer passar por uma serie de perguntas rapidas rapida?");

//INTERACÃO DO USUARIO

let primeiroNome = "Qual seu primeiro Nome?";
let sobreNome = "Qual seu Sobrenome?";
let campoDeEstudo = "Qual seu Campo de Estudo?";
let dataDeNascimento = "Qual sua data de Nascimento?";

//CONDICÃO DO CODIGO

if (quiz){
alert("Então vamos lá");
prompt(primeiroNome);
prompt(sobreNome);
prompt(campoDeEstudo);
prompt(dataDeNascimento);


} else{
document.write("<h1>obrigado por entrar no nosso site</h1>")
}

/*                                                 SEGUNDO PROJETO                                                    */

let pergunta = prompt(
"para fazer um calculo digite:" +
"\n (1) para divisao." +
"\n (2) para multiplicacao." +
"\n (3) para resto." +
"\n (4) para subtracao." +
"\n (5) para adicao."
);

let soma;
let segundaSoma;

if (pergunta === "1") {
  soma = prompt("Digite um valor para divisao:");
  segundaSoma = prompt("Digite outro valor para divisao:");

  const resultadoDaSoma = soma / segundaSoma;
  document.write("A divisão de: " + soma + " / " + segundaSoma + " =  " + resultadoDaSoma);
}
else if  (pergunta === "5") {
  soma = parseFloat(prompt("Digite um valor para somar:"));
  segundaSoma = parseFloat(prompt("Digite outro valor para somar:"));

  const resultadoDaSoma = soma + segundaSoma;
  document.write("A adicão de:" + soma + " + " + segundaSoma + " = " + resultadoDaSoma);
}
else if  (pergunta === "2") {
  soma = prompt("Digite um valor para multiplicacao:");
  segundaSoma = prompt("Digite outro valor para multiplicacao:");

  const resultadoDaSoma = soma * segundaSoma;
  document.write("A multiplicacão de: " + soma + " x " + segundaSoma + " = " + resultadoDaSoma);
}

else if  (pergunta === "3") {
  soma = prompt("Digite um valor para o resto:");
  segundaSoma = prompt("Digite outro valor para o resto:");

  const resultadoDaSoma = soma % segundaSoma;
  document.write("O resto de: " + soma + " e " + segundaSoma + " = " + resultadoDaSoma);
}

else if  (pergunta === "4") {
  soma = prompt("Digite um valor para subtracao:");
  segundaSoma = prompt("Digite outro valor para subtracao:");

  const resultadoDaSoma = soma - segundaSoma;
  document.write("A subtracão de: " + soma + " - " + segundaSoma + " = " + resultadoDaSoma);
}

else {
  pergunta !== "1" &&
  pergunta !== "2" &&
  pergunta !== "3" &&
  pergunta !== "4" &&
  pergunta !== "5"
  alert("voce nao colocou o numero correto");
} 



console.log(pergunta);
console.log(soma);
console.log(segundaSoma);
console.log(primeiroNome);
console.log(sobreNome);
console.log(campoDeEstudo);
console.log(dataDeNascimento);


  
/*                                                TERCEIRO PROJETO                                                     */




/*                 tenho que criar um personagem com poderes, abilidades, escudo e etc                                */  


/*velocidade dos carros e qual é mais rapido*/ 

const carro1 = prompt("informe o nome do primeiro carro");
const carro2 = prompt("informe o nome do segundo carro");
const velocidade1 = parseFloat(prompt("Qual a velocidade do seu carro?"));
const velocidade2 = parseFloat(prompt("Qual a volocidade do carro adversario?"));

if(velocidade1 > velocidade2){
document.write("o primeiro carro foi o vencedor")
} 

else if(velocidade1 < velocidade2){
document.write("o segundo carro foi o vencedor")
}

else{
document.write("Seu carro empatou com o carro adversario")
}

console.log(carro1);
console.log(carro2);
console.log(velocidade1);
console.log(velocidade2);



/*                                          PROJETO DO PERSONAGEM                                                     */




const nomeDoPersonagem = prompt("qual o nome do seu personagem?");
const nomeAdversario = prompt("qual o nome do seu adversario?");
const vida = parseFloat(prompt("qual a quantidade da vida do seu personagem?"));
let vidaAdiversario = parseFloat(prompt("qual a vida de seu adversario?"));
const poder = parseFloat(prompt("qual o poder do seu personagem?"));
const defesa = parseFloat(prompt("qual a defesa do inimigo?"));
const escudo = prompt("o inimigo possui um escudo?");
let danocausado = 0;


if (poder > defesa && escudo === "sim"){
  danocausado = (poder - defesa) / 2

}else if(poder > defesa && escudo === "nao"){
 danocausado = poder - defesa
}

const resuldado = vidaAdiversario -= danocausado

alert("Nome do atacante é: " + nomeDoPersonagem 
+ "\nNome do adversario é: " + nomeAdversario 
+ "\nVida do atacante é: " + vida 
+ "\n vida do adversario é: " + vidaAdiversario
+ "\nDefesa do adversario é: " + defesa 
+ "\nPoder do atacante é: " + poder
+ "\n adversario possuia um escudo: " + escudo
+ "\nA atual vida do adversario é: " + resuldado 
);
 


console.log(poder);
console.log(defesa);
console.log(escudo);
console.log(vida);
console.log(vidaAdiversario);
console.log(nomeDoPersonagem);
console.log(resuldado);
