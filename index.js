function scuberGreetingForFeet(distance){
  let result;
  if (distance <= 400) {
    result = "This one is on me!";
  }
  else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  let isItNYC = city === 'NYC';
  let result = isItNYC ? 'Ok, sounds good.' : 'No go.';
  return result;
}

function switchOnCharmFromTip(tip){
  let charmLevel;
  switch(tip) {
    case "generous" : charmLevel = "Thank you so much.";
    break;
    case "not as generous" : charmLevel = "Thank you."
    break;
    default: charmLevel = "Bye."
  }
  return charmLevel;
}