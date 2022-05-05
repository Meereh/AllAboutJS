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

//순서대로 작동 = 동기적
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
function async_callback(str, callback){
    setTimeout(function(){
        console.log(str);
        callback();
    }, Math.random() * 1000)
}

async_callback("냄비준비",function(){
    async_callback("물넣어 끓이기", function (){
        async_callback("라면/스프넣기", function(){
            async_callback("먹기", function(){

            });
        });
    });
});



console.log("Promise/async/await=========")
//1. allback 지옥
function async_promise(str){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(str);
            //compelete;
            resolve();
        }, Math.random() * 1000)
    })
}


async function aa(){
    await async_promise("냄비준비");
    await async_promise("물넣어 끓이기");
    await async_promise("라면/스프넣기");
    await async_promise("먹기");
}

aa();


