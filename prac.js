/* 9. 문자 교정 */

/* user code */
function answer(str) {
    let fix_str = "";
    

    str = str.replace(str[0], str[0].toUpperCase());
    
    // 코드 구현 시작 영역
     for(let i =0; i<str.length; i++){
        
         if(str[i]===" "){
             console.log(str[i+1]);
             console.log(i+1)
             console.log(str[i+1].toUpperCase());
             str = str.replace(str[i+1], str[i+1].toUpperCase())
             console.log(str)
         }
     }


    // 코드 구현 종료 영역
  
    return str;
  }
  
  /* main code */
  let input = [
    // TC: 1
    "Hello, my name is john",
    // TC: 2
    "This week is closed due to COVID-19",
    // TC: 3
    "fifty percent off this week",
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  