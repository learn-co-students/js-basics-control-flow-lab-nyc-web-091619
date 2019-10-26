function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return 'This one is on me!';
  }
  if (someValue > 2000 && someValue <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  if (someValue > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  if (destination == 'NYC'){
    return 'Ok, sounds good.';
  }
  if (destination != 'NYC'){
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip == 'generous') {
    return 'Thank you so much.';
  } else if (tip == 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}
  