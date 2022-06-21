//배열의 중복값 제거
const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']


//indexOf
console.log(array.indexOf("B")); //2

let result1 = [...new Set(array)];
console.log(result1);	// ['C', 'A', 'B', 'D', 'E']



//배열 값 일치하는지 비교
var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
var a3 = [1, 2, 3, 4];

Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false;
  
    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array) {
        if (!this[i].equals(getArray[i])) return false;
      } else if (this[i] != getArray[i]) {
        return false;
      }
    }
    return true;
  };
  
console.log(a1.equals(a2));
console.log(a2.equals(a3));



//OR 같은 배열인지비교
// 방법 1
console.log(JSON.stringify(a1) === JSON.stringify(a2))

// 방법 2
console.log(a1.join('') === a2.join(''))



//arr => set
const arr = [1, 1, 3, 4, 5, 2]

const set = new Set(arr)

console.log(set);


//set => arr
let array1 = Array.from(set);
console.log(array1);


//reverse
const array_1 = ['a', 'b', 'c', 'd'];
console.log(array_1); // a, b, c, d

const reverse1 = array_1.reverse();
console.log(reverse1); // d, c, b, a
console.log(array_1); // d, c, b, a


//slice()
//begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.

//start
//undefined인 경우: 0부터 slice
//음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출한다.

//end
//지정하지 않을 경우: 배열의 끝까지 slice
//음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출

var arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

var arr1 = arr11.slice(3, 5);			// [4, 5]
var arr2 = arr11.slice(undefined, 5);		// [1, 2, 3, 4, 5]
var arr3 = arr11.slice(-3);			// [8, 9, 10]
var arr4 = arr11.slice(-3, 9);			// [8, 9]
var arr5 = arr11.slice(10);			// []
var arr6 = arr11.slice(4);			// [5, 6, 7, 8, 9, 10]
var arr7 = arr11.slice(undefined);		// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr8 = arr11.slice(5, -4);			// [6]
var arr9 = arr11.slice(2, 15);			// [3, 4, 5, 6, 7, 8, 9, 10]


//splice()
// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

//start
//음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.

var arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

var arr13 = arr12.splice(10, 2, 'a', 'b', 'c');  //10번째부터 2개
console.log(arr12);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr13);  // [11, 12]



//배열속 원하는 값찾기
var a = [1,2,3,4,5,1,2,3]

a.indexOf(3)
//2

a.indexOf(6)
//-1


a.includes(3)
//true

a.includes(6)
//false




//map
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"



let answer ={}; //key ,value


//배열 10개 0으로 초기화
let result = new Array(10).fill(0);


//배열 안의 값 모두 찾기 (index)
const arrayy = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const search = 9;
const searchResult = [];
let index = arrayy.indexOf(search);
while (index != -1) {
    searchResult.push(index);
    index = arrayy.indexOf(search, index + 1);
}

console.log(searchResult);


// ->unshift <- shift ======= ->pop <-push


<<<<<<< HEAD
//차집합
//a b 중 a에만 해당하는것
let arrA = [1, 2, 3];
let arrB = [2, 3, 4, 5];

let difference = arrA.filter(x => !arrB.includes(x)); // 결과 1

//교집합
//A, B 공통으로 가지고 있는 것
let difference1 = arr1.filter(x => arr2.includes(x)); // 결과 2, 3

//배타적 논리합
//A, B 공통적인거 빼고, A에만 있는거 + B에만 있는거
let difference2 = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x))); // 결과 1, 4, 5
=======
//배열 내 같은 요소 제거하기
//set
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
>>>>>>> 9cfee61f39e773649b655e4e9132221e8aad021b
