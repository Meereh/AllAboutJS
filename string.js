//문자열 검색
let text = "hello, world!!";


//indexOf (특정 문자 위치[index] 찾기)
//찾는 문자열 없으면 -1 return
console.log(text.indexOf("l"))   //2  (첫번째로 찾은 값의 index)
console.log(text.indexOf("l", 3)) //3   (두번째인자: 찾을 값 시작할 위치)
console.log(text.lastIndexOf("l")) //10


//includes
console.log(text.includes("Hello")) //false
console.log(text.startsWith("ello", 1)) //true
console.log(text.endsWith("word"))  //false  //어떤 문자열에서 특정 문자열로 끝나는지 확인

//match
console.log(text.match("hello")) //[ 'hello', index: 0, input: 'hello, world!!', groups: undefined ]

// if(str.match('hello')[0] === 'hello'){
// 	console.log('Okey');
// }

let str11 = [];

str11[0] = "apple 200 banana helloworld nodejavascript";
str11[1] = "javascript apple 200";

let reg = [/\w+java\w+/g, /java\w+/]

for(let i=0;i<str11.length;i++){
 let result11 = str11[i].match(reg[i]);
 console.log(result11)
}




//문자열 대소변화
let str = "Hello";

console.log(str.toUpperCase())  //HELLO
console.log(str.toLowerCase())   //hello




//문자열 치환
//replace()
//정규 표현식을 확용 문자열 치환: /치환문자열/g(전체)i(대소문자 구분X)
let text1 = "helLo, world!!!";
let changed_text = "";

changed_text = text1.replace("world", "earth")
console.log(changed_text);   //helLo, earth!!!
console.log(text1);          //helLo, world!!!

console.log(text1.replace("!", "?"))  //helLo, world?!!
console.log(text1.replace("l", "i"))  //heiLo, world!!!

console.log(text1.replace(/l/g, "i")) //heiLo, worid!!!
console.log(text1.replace(/l/gi, "i"))  //heiio, worid!!!


//문자열 추출
//위치기반 문자열 추출 slice/substring
//길이기반 문자열 추출 substr
let text3 = "hello, world!!!";

console.log(text3.slice(0, 5));   //hello  (0~4번째까지)
console.log(text3.slice(4,5));  //o
console.log(text3.slice(4));   //o, world!!! (4번째부터~)
console.log(text3.slice(-4));   //d!!! (뒤에서 4번째까지)

//substring: end> start -> start > end
console.log(text3.slice(2, 6));  //llo,
console.log(text3.slice(6, 2));  
console.log(text3.substring(2, 6))   //llo,
console.log(text3.substring(6, 2))   //llo,

console.log(text3.substr(2, 6)) //llo, w
console.log(text3.substr(-5, 3))   //ld! (뒤에서 5번째~ +3개) 


//문자열 분할
//split
let fruits = "apple banana melon";

result = fruits.split("");   
console.log(result);   //['apple', 'banana', 'melon']

console.log(result[0]) //apple

let text4 = "hello";
result = text.split("")
console.log(result)  //['h','e','l','l','o']
console.log(result.length) //5
console.log(result[0])  //h

result = text.split("", 3)
console.log(result)     ////['h','e','l']
console.log(result.length)   //3


//숫자만 추출
let strnum = "abcdislE GIWJ123GKDEE443f";
strnum = strnum.replace(/[a-z]/gi,"")


//문자만추출
strnum = strnum.replace(/[1-9]/g,"")