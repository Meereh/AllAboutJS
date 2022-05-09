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