//set
//집합연산
//중복내용 제거가능
//key와 value가 동일하게 들어간다.
const table = new Set();

table.add("key");  
table.add("key1");

console.log(table.has("key")); 
console.log(table.has("key3")); 

table.delete("key2");

console.log(table.has("key2"));

table.add("key3");
console.log(table.size);
table.clear();
console.log(table.size)