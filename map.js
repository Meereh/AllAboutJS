//key로 여러가지 type 사용가능
const map = new Map();
const myFunction = () => console.log('I am a function.');
const myNumber = 1234;
const myObject = {
  name: 'plainObjectValue',
  otherKey: 'otherValue'
};
 
map.set(myFunction, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');
 
console.log(map.get(myFunction)); // key 로 function을 사용한 예
console.log(map.get(myNumber)); // key 로 number를 사용한 예
console.log(map.get(myObject)); // key 로 object를 사용한 예
console.log(map)



//map 크기를 빠르고 쉽게 측정
const map1 = new Map();
map1.set('someKey1', 1);
map1.set('someKey2', 1);

map1.set('someKey100', 1);
 
console.log(map1.size) // 100, Runtime: O(1)


//entry들의 잦은 추가와 제거에 최적화

//직접 iteration
const map2 = new Map();
map2.set('someKey1', 1);
map2.set('someKey2', 2);
map2.set('someKey3', 3);
 
for (let [key, value] of map2) {
  console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3



//생성자
let map_example = new Map();

//크기
map_example.size;

//모든 key,value지우기
map_example.clear();

//key로 value 구하기
map_example.get(key);

//특정 key를 가지고 있는지 확인하기
map_example.has(key)

//특정 key로 value 를 Map에 넣기 (반환값은 Map object)
map_example.set(key, value);

//[key,value]의 array 를 삽입 된 순서대로 가진 새로운 Iterator 반환
map_example.entries()