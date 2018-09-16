function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length; i++) {
    array.push(`${i + 1}. ` + `${dwarves[i]} `);
  }
  return array.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase}` + "!");
  }
  return array;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return "cheddar";
    } else if (foods[i] === "gouda") {
      return "gouda";
    } else if (foods[i] === "camembert") {
      return "camembert";
    } else {
      return "no cheese!";
    }
  }
}
