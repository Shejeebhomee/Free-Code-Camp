
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var start = str.length - target.length;
  if(str.substr(start, str.length) == target){
     return true;
  } else {
     return false;
  }
  return str;
}

confirmEnding("Bastian", "n");
