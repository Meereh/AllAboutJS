const object = {};
 
// key-value pair 넣기
object['key1'] = 'value1';
object['key2'] = 'value2';
object['key3'] = 'value3';
 
// 특정 key를 가지고 있는지 확인하기
if (object.hasOwnProperty('key1')) {
  console.log('Map contains key1');
}
 
// 특정 key의 value를 찾기
console.log(object['key1']);