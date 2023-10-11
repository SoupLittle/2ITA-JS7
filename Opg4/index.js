var list1 = [1,2,3,4,5];
var list2 = [0,1,2,3,4];
var result = [];

for (var i = 0; i < list1.length; i++) {
  var sum = list1[i] + list2[i];
  result.push(sum);
}

console.log(result.join());