function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting;

  if (distance <= 400) {
    greeting = `This one is on me!`;
  } else if (distance > 2500) {
    greeting = `No can do.`;
  } else if (distance > 2000) {
    greeting = `I will gladly take your thirty bucks.`;
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === `NYC`) ? `Ok, sounds good.` : `No go.`;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = ``;

  switch (tip) {
    case `generous`:
      response = `Thank you so much.`;
      break;
    case `not as generous`:
      response = `Thank you.`;
      break;
    default:
      response = `Bye.`;
      break;
  }
  return response;
}