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

function ternaryCheckCity(){
  const city = "NYC";
  const respond = city === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return respond;
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
  console.log(charmLevel);
}