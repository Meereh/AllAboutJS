//고차함수 : 하나 이상의 함수를 매개변수로 취하거나 함스를 결과로 반환하는 함수
//sort/forEach/map/find/filter/reduce


//반복작업 forEach()
//return 없다
//Array.forEach(function(item, index, array){})
//item: 배열요소/index: 배열위치/array: 배열
let nums = [1, 2, 3];
nums.forEach(function(i){
    console.log(i);
})

const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});

console.log(newMyArr); // undefined



//콜백함수 결과 배열 반환 map()
//주어진 배열 값을 재정의 (기존배열과 다름. 새로운 배열 만들어냄. 단, 객체는 공유)
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
    {name: 'bob', age: 17, job: false},
    {name: 'alice', age: 20, job: false},
    {name: 'john', age: 27, job: true}
];

let find_job = users.find(function(user){
    return user.job === false;
})
console.log(find_job)
//{ name: 'bob', age: 17, job: false }

let find_age = users.find(function(user){
    return user.age > 19;
});
console.log(find_age);
//{ name: 'alice', age: 20, job: false }



//콜백함수의 조건을 만족하는 값을 배열로 반환. filter()
//Array.find(function(item, index, array){})
let filter_job = users.filter(function(user){
    return user.job===false;
})
console.log(filter_job);
/*[
    { name: 'bob', age: 17, job: false },
    { name: 'alice', age: 20, job: false }
  ]
  */

  let filter_age = users.filter(function(user){
      return user.age > 19;
  })
  console.log(filter_age);

/*[
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
 */



//요소별 함수 수행 누적 결과값 반환
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
//accumulator: 이전함수 결과(initial로 초기값 설정가능)/item: 배열 요소/ index: 배열위치/ array: 배열
let numbers = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = numbers.reduce(function(acc, item, idx, arr){
    console.log(acc, "\t\t", item, "\t\t", idx);
    call_count++;
    return acc + item;
}, 0); //initial 없다면 index 1부터 시작

console.log(call_count); //5
console.log(sum);   //15
/*
result	value	index
0 		 1 		 0
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
 */


//reduceRight :  reduce와 동작은 같지만 요소 순회를 오른쪽에서부터 왼쪽으로 한다는 점이 차이.
const oneTwoThree = [1, 2, 3];
result = oneTwoThree.reduceRight((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
  }, 0);
  // 0 3 2
  // 3 2 1
  // 5 1 0
  result; // 6




  result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
  result; // ['홀수', '짝수', '홀수']


  result = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur);
    return acc;
  }, []);
  result; // [1, 3]