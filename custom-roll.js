const prompt = require('prompt-sync')
({sigint: true})
// console.log("What dice would you like to roll? \n1.Four sided\n2.six sided\n3.Eight sided\n4.Ten sided\n5.Twelve sided\n6.Twenty sided")
console.log("Enter number sided die you wish to use")
let kindOfDice = prompt(String(": "))

if( kindOfDice ===kindOfDice){
   console.log(Math.ceil(Math.random()*kindOfDice))
}


// if (kindOfDice === '1'){
//   console.log(Math.ceil(Math.random()*4))
//   if (kindOfDice === "done"){
// return
// }
// }else if( kindOfDice === '2'){
//   console.log(Math.ceil(Math.random()*6))
  
// }else if( kindOfDice === '3'){
//   console.log(Math.ceil(Math.random()*8))
  
// }else if( kindOfDice === '4'){
//   console.log(Math.ceil(Math.random()*10))
  
// }else if( kindOfDice === '5'){
//   console.log(Math.ceil(Math.random()*12))
  
// }else if( kindOfDice === '6'){
//   console.log(Math.ceil(Math.random()*20))
  
// }else {
//   console.log("error")