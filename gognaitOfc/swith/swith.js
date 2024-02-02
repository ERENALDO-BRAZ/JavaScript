
// CONVERSOR DE KILOMETROS 





let valor = prompt("digite um valor em metros:")

let conversor = parseFloat(prompt(
   "para qual quilometragem voce quer trocar? digite o numero da sua quilometragem:" +
   "\n1: milímetro (mm)" +
   "\n2: centímetro (cm)" + 
   "\n3: decímetro (dm)" + 
   "\n4: decâmetro (dam)" + 
   "\n5: hectômetro (hm)"+ 
   "\n6: quilômetro (km)"
   )
   )

switch (conversor){
 case 1:
 alert("agora seu valor foi alterado de: " + valor + " (m) " + "Para: " + valor * 1000 + " (mm)")
 break

 case 2:
 alert("agora seu valor foi alterado de: " + valor + " (m) " + "Para: " + valor * 100 + " (cm)")

 break
 case 3:
 alert("agora seu valor foi alterado de: " + valor + " (m) " + "Para: " + valor * 10 + " (dm)")

 break
 case 4:
    alert("agora seu valor foi alterado de: " + valor + " (m) " + "Para: " + valor / 10 + " (dam)")

 break
 case 5:
    alert("agora seu valor foi alterado de: " + valor + " (m) " + "Para: " + valor / 100 + " (hm)")
 break
 case 6:
   alert("Seu valor foi de: " + valor + " (m) " + "Para: " + valor / 1000 + " (km)")
    break

    default: 
    ("voce colocou oa expressao correta")
}


console.log(conversor)
console.log(valor)

