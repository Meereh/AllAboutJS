function f1(){
    setTimeout(function () {
        console.log('A')
    }, Math.random() * 1000)
}

function f2(){
    setTimeout(function () {
        console.log('B')
    }, Math.random() * 1000)
}

function f3(){
    setTimeout(function () {
        console.log('C')
    }, Math.random() * 1000)
}

function f4(){
    setTimeout(function () {
        console.log('D')
    }, Math.random() * 1000)
}

f1();
f2();
f3();
f4();