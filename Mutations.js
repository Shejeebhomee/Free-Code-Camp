
function mutation(arr) {
   var test = arr[1].toLowerCase(); //holds what we are looking for in target array
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
