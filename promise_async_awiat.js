async function aa(){
    
    let resolve;
    let promise =  new Promise (function(r, reject) {
        console.log("C")
        resolve = r;
    })   //resolve함수 호출되지 않으면 await 블록 빠져나가지 못함

    setTimeout(resolve, 2000);
    
    console.log("A");
    
    let box = await promise;      //await promise 뜻 : resolve가 되었는지 안되었는지 계속기다림.
    
    console.log('B');
}
aa();

//promise는 상태에 대한 정보 가지고 있음.
//상태확인 (console.log(promise)해보기)
//resolve 호출x = 영원히 await 빠져나가지 못함 === pending 상태
//resolve() === fulfilled 상태