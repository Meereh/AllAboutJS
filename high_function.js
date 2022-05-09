//고차함수 : 하나 이상의 함수를 매개변수로 취하거나 함스를 결과로 반환하는 함수
//sort/forEach/map/find/filter/reduce


//반복작업 forEach()
//Array.forEach(function(item, index, array){})
//item: 배열요소/index: 배열위치/array: 배열
let nums = [1, 2, 3];
nums.forEach(function(i){
    console.log(i);
})



//콜백함수 결과 배열 반환 map()
//Array.map(function(item, index, array){})
//item: 배열요소/index: 배열위치/array: 배열
let use_map = nums.map(function(item){
    return item*2;
})
console.log(use_map)   //[2, 4, 6];



//콜백함수의 조건 만족하는 단하나 값 반환. find()
//Array.find(function(item, index, array){})
//item: 배열요소/index: 배열위치/array: 배열
let users = [
    
]