function scuberGreetingForFeet(someValue){

  if (someValue > 2500) {
    return "No can do."
  } else if(someValue > 2000) {
    return "I will gladly take your thirty bucks."
  } else if(someValue <= 400){
    return "This one is on me!"
  } else {
    return "money"
  }
}

function ternaryCheckCity(cityName){
  let response;
  cityName === "NYC" ? response = "Ok, sounds good." : response = "No go."
  return response;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
    response = 'Thank you.'
    break;
    default:
      response = "Bye."
      break;
  }
  return response;
}