// countChar returns the number of characters in the given string that match the given char

function countChar(string, chr) {

  var totalCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === chr) {
      totalCount++;
    }
  }

  return totalCount;

}

console.log(countChar('Alpha A', 'A'));

var countBs = function(string) {
  return countChar(string, 'B');
};

console.log(countBs('Beta B'));
