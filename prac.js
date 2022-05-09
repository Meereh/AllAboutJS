let str =   [1, 2, 3, 5, 8, 10, 12, 15, 18, 20];
let newstr= str.join(' ');
//console.log(newstr);

 let arr= [];
 for(let i=0; i<newstr.length;i++){
     console.log(newstr[i])
    // console.log(i)
     if(newstr[i].indexOf(i+1)===-1)
     arr.push(i+1)
 }
 console.log(arr)


// let arr =[];
// const student = str.find(function empty(missing,index){
 
//     if(missing !==index+1)
//         arr.push(index+1);

// })

// console.log(arr)