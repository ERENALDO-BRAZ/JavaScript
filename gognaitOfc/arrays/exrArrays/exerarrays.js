let pacienteArmazenado = [];
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
    if(pacienteChamado){
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