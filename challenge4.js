
// make an empty array
var numbers = [];

// fill array with random numbers
for (var i = 0; i < 20; i++)
{
    // generate a number between 1 and 1000
  var randomNumber = Math.floor( Math.random() * 1000) + 1;
  // put the number in an array  
    numbers[i] = randomNumber;
}
console.log(numbers);

// print nnumbers divisible by 5 to console
for (var i = 0; i < numbers.length; i++)
{
    var currentValue = numbers[i];
    
    var divisibleByFive = (currentValue % 5 == 0);
    if (divisibleByFive)
    {
       console.log(currentValue);
    } 
}
