//소인수분해
function primeFactors(n){
    while (n%2 == 0) {
        console.log(2)
        n = n/2
    }
    // 이제 n은 홀수 -> 이미 2의 배수를 판별했기때문에 2씩 증가시킬 수 있음
    for (var i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
            console.log(i)
            n = n/i
        }
    }
    if (n>2) {
        console.log(n)
    }
}

//소수확인
function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (var i = 2;i<n;i++) {
        if (n%i==0) {
            return false
        }
    }
    return true
}


//최대공약수
function GCD(a, b)
{
  if (b == 0)
  {
    return a;
  }
  else
  {
    return GCD(b, a%b);
  }
}


//최대값/최소값
var myArray = [1, 5, 6, 2, 3];
var m = Math.min(...myArray);
console.log(m)

var m = Math.max.apply(null, myArray);
console.log(m)

let min = Number.MAX_SAFE_INTEGER;
for(let i =0; i<myArray.length; i++){
    if(min> myArray[i])
    min = myArray[i];
}


//등차수열/등비수열
//s: 초기값, t: 간격, number: 횟수

function recursive(s, t, number){
    if(number===1){
        return s;
    }else{
        return recursive(s, t, number-1) + t;
    }
}


