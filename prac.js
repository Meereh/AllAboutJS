var arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

var arr13 = arr12.splice(10, 2, 'a', 'b', 'c');  //10번째부터 2개
console.log(arr12);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr13);  // [11, 12]
