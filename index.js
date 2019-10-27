function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return  'This one is on me!'
  }
  
  if (distance > 2500 ){
    return "No can do."
  }
  
  if (distance > 2000){
    return 'I will gladly take your thirty bucks.'
  }
  

}

function ternaryCheckCity(city){
  return (city === "NYC"? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
    
  }
}