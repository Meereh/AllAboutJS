const N = 2;
const K = 2;
const sit =[];
const out = [];

for(let i =0; i<N; i++){
    sit.push(i+1);
}

if(N===2){
    if(K===1){
        console.log(2) ;
    }
    else{
        console.log(1) ;
    }
}else {
    while(sit.length >K-1){
        for(let i =0; i<K-1;i++){
            sit.push(sit.shift());
        }
        out.push(sit.shift());
    }
}
//console.log(sit)
//console.log(sit.pop())