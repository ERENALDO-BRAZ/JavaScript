let arrays = [];
let question = prompt("whats your name dumb?");
let bolean = confirm("you know javaScript?");


if(bolean === true){
    bolean = "yes"
    
}else{
    bolean = "no"
}
arrays[0] = "hello world\n";
arrays[1] = "coe meu mano\n";
arrays[2] = "your name is: \n" + question + "\n"
arrays[3] = "Voce sabe java Script? \n" + bolean

alert(arrays);
console.log(arrays);




//              PROCURANDO ARRAYS


/*let arr = ["yasuo", "seraphine", "yone", "samira", "soraka"];
console.log(arr);

// *push* Adicona elementos no final do array. (obs: se voce criar uma vareavel pra atribui-lo ele vai retornar a quantidade de array que existem, e nao o array que adicionou.)

let quantidade = arr.push("naltilos");
console.log(arr);
console.log(quantidade);
// *unshift* Adiciona elementos no comeco do array. (obs: se criar uma vareavel e atribuilo ele tbm vai exibir a quantidade de array e nao que voce adcionou.)

quantidade = arr.unshift("nami");
console.log(arr)
console.log(quantidade);
// *pop* remove o ultimo elemento do array. (se o atribuilo a uma vareavel ele exibe o array que removeu.) (obs: no pop voce nao precisa chamar um elemento so colocar entre parenteses já é o suficiente ele indentifica o ultimo elemento automaticamente)

let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// *shift* Remove o primeiro elemento do array. (se o atribuilo a uma vareavel ele exibe o array que removeu.) (obs: tbm nao precisa declarar nada só deixar entre parenteses "()".)

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);


// *includes* Serve para pesquisar um elemento dentro do array, "verificar se á este elemento la", ele restorna um valor booleano.

let exibir = arr.includes("yasuo");
console.log(arr);
console.log(exibir);


// *index0f* Serve para pesquisar um array. (ele exibe um valor boolen, se tem ou nao o elemento, e tbm exibe a casa desse elemto "a posicao que ele está")

exibir = arr.indexOf("yone");
console.log(arr);
console.log(exibir);


// *slice* Ele copiar uma parte especifica que voce quer do array e exibir essa parte que voce copiou. (obs: voce pode mandar ele procurar de um local até outro pode restroceder ou troceder, por exemplo: da casa -10 até a casa 5 ou da casa 5 até a 10.)

exibir = arr.slice(0, 4);
console.log(arr);
console.log(exibir);


// *concat* serve para concatenar um array em outro, ou strings, numeros e etc.

const concatenacao = exibir.concat(ultimoElemento, "katarina");

console.log(exibir);

console.log(concatenacao);


// *splice* serve para substituir um elemento dentro do arrays, se for mais de uma elemento ele vai colocar do elemento selecionado seguindo em linha reta. por exemplo(um elemento na pocicao 3, vc substitui e acrescenta tres, o vai ficar na pocicao 3, 4, 5 e assim sucetivamente).

const sb = concatenacao.splice(arr, 1, "katarina", "porra");
console.log(sb);
console.log(concatenacao);


for (let indice = 0; indice < concatenacao.length; indice++){
    const element = concatenacao[indice]

    console.log(element + " esta na pocisao " + indice);
};*/
