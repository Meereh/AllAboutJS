/* 9. 문자 교정 */

/* user code */
function answer(str) {
    let fix_str = "";
  
    let idx = 0;
    // 코드 구현 시작 영역
    for(i of str){
        console.log(i)
    }
    // do{
    //     idx = str.indexOf(" ");
    //     console.log(idx)
    //     str.replace(str[idx+1], str[idx+1].toUpperCase())
    //     idx++;
    // }while(idx !== str.length)
    // 코드 구현 종료 영역
  
    return str;
  }
  
  /* main code */
  let input = [
    // TC: 1
    "Hello, My name is john",
    // TC: 2
    "This week is closed due to COVID-19",
    // TC: 3
    "fifty percent off this week",
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  