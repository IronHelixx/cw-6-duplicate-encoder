function duplicateEncode(word) {
  const letterArray = word.toLowerCase().split("");
  let outPutString = [];
  for (i in letterArray) {
    outPutString.push(
      word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")"
    );
  }
  return outPutString.join("");
}

/* **
// Alternative Solution:

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

** */
