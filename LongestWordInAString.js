
function findLongestWord(str) {
  var words = str.split(' ');
  var Longest = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > Longest) {
      Longest = words[i].length;
    }
  }

  return Longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
