//.sort() 그대로 쓰면... 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생하기 때문에
//원하는 정렬 결과 얻기 어렵다.

let nums = [1, -1, 4, 0, 10, 20, 12];

let ascending_order = function (x,y) { return x-y;}
let descending_order = function (x,y) { return y-x;}
console.log(nums.sort(ascending_order))
console.log(nums.sort(descending_order))