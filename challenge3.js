//eloquent

var hash = '';
for (var i = 0; i < 7; i++) {
  console.log(hash += '#');
}

for (var i = 0; i < 100; i++) {
  var number = i + 1;
  var answer = "";
  if (number % 3 == 0) {
    answer = "Fizz";
  }
  if (number % 5 == 0) {
  	answer += "Buzz";
  } 
  if (!answer) {
  	answer = i + 1;
  }
  console.log(answer);
}


var col = 8;
for (var i = 0; i < col; i++) {
  var row = "";
  for (var j = 0; j < col; j++) {
    var total = i + j;
  	if (total % 2 == 0) { 
  	  row += '#';
   } else {
      row += ' ';
 }
  }
  console.log(row);
}