const prompt = require('prompt-sync')
({sigint: true})
console.log("What dice would you like to roll? \n1.Four sided\n2.six sided\n3.Eight sided\n4.Ten sided\n5.Twelve sided\n6.Twenty sided")

let kindOfDice = prompt(Number("> "))


if(kindOfDice = 1){
  leyrollDice(4) 
    return 1 + Math.floor(Math.random() * 4);
    console.log(rollDice(4))
  } 



// function rollDice(max) {
//     return 1 + Math.floor(Math.random() * max);
    
//   }
  

// console.log(rollDice(30))