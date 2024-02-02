//                                     ROBO DA TABUADA


/*const number = prompt(
    "heyy, i am the robot from the multiplication table." +
    "\nreport a number for what i can add"
);

let result = ""

for(let score = 0; score <= 20; score++){
    result += "->" + number + " x " + score + " = " + (number * score) + "\n";

}
alert("o resultado de: " + number + "\n\n" + result);*/




//                      PROCURANDO PALIDROMOS





const word = prompt("report a the word");

let wordInverted = ""


for(let i = word.length - 1; i >= 0; i--){
    wordInverted += word[i];
}

if(word === wordInverted){
    alert("The word is a palindromo.\n\n" + word + " => " + wordInverted);
}
else{
    alert("The word is not palinromo\n\n" + word + " => " + wordInverted);
}





