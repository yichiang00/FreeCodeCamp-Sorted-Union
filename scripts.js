
function uniteUnique(arr) {
  var result = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
    if(arguments[0].indexOf(arguments[i][j])===-1)
    {
      result.push(arguments[i][j]);
    }
}}
 return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
