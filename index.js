
function scuberGreetingForFeet(someValue) {
  let result;
  {
  if (someValue <= 400)
    result = 'This one is on me!'
  else if (someValue >= 2500)
    result = 'No can do.'
  else if (someValue)
    result = 'I will gladly take your thirty bucks.'
  }
return result

}

function ternaryCheckCity(city){
  let result;
  {
  if (city === 'NYC')
    result = 'Ok, sounds good.' 
  else 
    result = 'No go.';
  }
  return result
}

function switchOnCharmFromTip(tip){
  let result;
  {
  if (tip === 'generous')
    result = 'Thank you so much.'
  else if (tip === 'not as generous')
    result = 'Thank you.'
  else
    result = 'Bye.' 
  }
  return result
}