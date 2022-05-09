//배열의 중복값 제거
const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

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