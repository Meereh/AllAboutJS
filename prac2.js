let arr =[];
for(let i = 2;  i<2+8;i++){
    if(i < 3){
        arr.push(i)
    }else if (i>8){
        let num = i%8;
         arr.push(num)
        //console.log(i%8)
    }
   
}
console.log(arr)