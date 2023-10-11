//Calculate +

function calculateSum(list) {
    var sum = 0;
    list.forEach(function(number) {
      sum += number;
    });
    return sum;
  }
  
  console.log(calculateSum([3, 66, 45])); 
  
  //Calculate *

  function calculateSum2(list) {
    var sum2 = 1;
    list.forEach(function(number) {
      sum2 *= number;
    });
    return sum2;
  }
  
  console.log(calculateSum2([3, 66, 45])); 