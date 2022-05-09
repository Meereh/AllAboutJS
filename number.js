//지수로 표기되는 양수 최대/최소값
//Number.MAX_VALUE  / Number.MIN_VALUE

//안전하게 표기되는 최대(양수)/최소(음수)값
//Number.MAX_SAFE_INTEGER
//Number.MIN_SAFE_INTEGER

//무한대 양수/음수값
//Number.POSITIVE_INFINITY
//Number.NEGATIVE_INFINITY


//형 변환
//Nuber => string
//Number.toString()
//String(Number)
//Numer+""

//자리수표현
//소수의 자리 수 길이제한 : Number.toFixed(ps);
//정수와 소수의 자리 수를 합한 길이로 제한: Number.toPrecision(ps)
let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2)  //1.54399999999997
console.log((num_1 - num_2).toFixed(3))   //1.544
console.log((num_1 - num_2).toPrecision(3))  //1.54


//Number 자료형 확인
//부동 소수점 산술에서 정의되지 않거나 표현할 수 없는값(NaN)인지 확인: Number.isNaN(숫자) 
//정상적인 유한수인지 확인: Number.isFinite()


//정수와 실수 형변환
//정수로 변환하는 방법(N진수로 명시적 변환도 가능) : Nubmer.parseInt()
//실수로 변환하는방법: Number.parseFloat()
console.log(Number.parseInt("125px")) //125
console.log(Number.parseFloat("1.25em")) //1.25
console.log(Number.parseInt("1.25em")) //1
console.log(Number.parseInt("t123"))  //NaN
console.log(Number.parseInt("0f", 16))  //15