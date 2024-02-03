/*let pacienteArmazenado = [];
let menu = 3

do{
 let pacientes = ""
 
  
 for (let i = 0; i < pacienteArmazenado.length; i++) {
    pacientes += (i + 1) + "* - " + pacienteArmazenado[i] + "\n"
 }


 menu = parseFloat(prompt(          
 "este é o menu interativo sobre os pacientes.\n" +
 "aqui esta a lista dos pacientes: \n" + pacientes +
 "\ninforme o valor que deseja consultar:\n" +
 "1: novo paciente\n" + 
 "2: consultar paciente\n" + 
 "3: sair"

 ));
 switch(menu){
    case 1:
     const adicionarPaciente = prompt("qual o nome do paciente que quer aicionar a fila?");
     pacienteArmazenado.push(adicionarPaciente);
     
    break
    
    case 2:   
    const pacienteChamado = pacienteArmazenado.shift()
    if(typeof pacienteChamado === "string"){
     alert("o paciente chamado foi: " + pacienteChamado)
    }else{
        alert("nao tem paciente nessa fila para ser chamado.")
    }
    break

    case 3: 
    alert("voce esta saindo do menu...")
    break

    default:
    alert("voce colocou a espressao incorreta");

} 



}while(menu !== 3);
*/

let cart = [];
let menu = 3;

do{
    let letterStorage = "";

    for(let i = 0; i < cart.length; i++ ){
        letterStorage += (i + 1) + " * " + cart[i] + "\n";
    }

    let size = cart.length;
    
 menu = parseFloat(prompt(          
 "this is the menu of cart\n" +
 "here this the amount of cart \n" + size +
 "\nhere this the name of the cart\n" + letterStorage +
 "\ntype it the option below: \n" +
 "1: new cart\n" + 
 "2: consult cart\n" + 
 "3: exit"
 )
 );   

 switch(menu){
    case 1:
   let nameOfCart = prompt("what is the name of the cart");
   letterStorage = cart.unshift(nameOfCart)
   break

   case 2: 
   const removeTheCart = cart.shift()
   alert("the cart removed is: " + removeTheCart);
   break

   case 3: 
   alert("you this exiting of the menu, thank you");
   break
   
   default:
    alert("you no typed the correct expression!");
 }

}while(menu !== 3);













