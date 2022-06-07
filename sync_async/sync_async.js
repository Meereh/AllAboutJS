//동기/ 비동기 - 코드실행 순서
function echo(str){
    console.log(str);
}

//순서대로 작동 = 동기적
echo("냄비준비");
echo("물넣어 끓이기");
echo("라면/스프넣기");
echo("먹기");



console.log("async==========")
//비동기
function async(str){
    setTimeout(function(){
        console.log(str);
    }, Math.random() * 1000)
}

async("냄비준비");
async("물넣어 끓이기");
async("라면/스프넣기");
async("먹기");

/* 비동기 ex. 인터넷 통신하는 경우
통신요청 후 응답을 언제 받을지 시간 알 수 없음
순서가 보장이 안되면 문제가됨.
비동기적 => 순서 맞춰줄 수 있도록
1. callback 함수 
2. promise/async_await */


console.log("callback=========")
//1. callback 지옥
//코드 보기 어려움.
function async_callback(str, callback){
    setTimeout(function(){
        console.log(str);
        //complete
        callback();
    }, Math.random() * 1000)
}

async_callback("냄비준비",function(){
    async_callback("물넣어 끓이기", function(){
        async_callback("라면/스프넣기", function(){
            async_callback("먹기", function(){

            });
        });
    });
});



console.log("Promise/async/await=========")
//2.promise-async-await
function async_promise(str){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(str);
            //compelete;
            resolve();
        }, Math.random() * 1000)
    })
}

//async가 붙은 함수안에서 await 키워드 붙여서 사용
async function aa(){
    await async_promise("냄비준비");
    await async_promise("물넣어 끓이기");
    await async_promise("라면/스프넣기");
    await async_promise("먹기");
}

aa();



console.log("Promise/async/await22=========")
//2-1.promise-async-await
//꼭 resolve 함수가 async 함수 내에서 실행되어야 하는것은 아님.
async function bb(){
    //아래 Promise가 실행되어야 그 다음 줄 console.log 실행가능
    let box = await new Promise(function(resolve, reject){
        //resolve == 함수
        //resolve함수에 매개변수 전달가능.
        //box에는 resolve 함수안 매개변수가 전달.
        resolve(123); //함수 벗어남.console P 출력가능
        
    })
    console.log(box);
    console.log("P")
}


/*
async function bb(){
    let promise = new Promise(function(resolve, reject){
        resolve(); //함수 벗어남.console P 출력가능
    })

    console.log(1);
    let box = await promise;
    console.log(2);
}
 */

bb();