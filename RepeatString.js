
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat = "";
  while (num > 0)
    {
      repeat += str;
      num--;
    }
  return repeat;
}

repeatStringNumTimes("abc", 3);
