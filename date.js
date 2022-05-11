//날짜를 입력받아 요일 반환
function answer(str) {
    let week = new Array(
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    );
    let day;
  
    let date = new Date(str);
    day = week[date.getDay()];
  
    return day;
  }
  
  /* main code */
  let input = [
    // TC: 1
    "2021-01-27",
    // TC: 2
    "2021-02-27",
    // TC: 3
    "2021-03-14",
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  


  //오늘 날짜 구하기
  var today_date = new Date();
  console.log(today_date);


  //year
  console.log(today_date.getFullYear());


  //month
  //0월부터 시작하기 때문에 +1 해줘야
  console.log(today_date.getMonth()+1);


  //day
  console.log(today_date.getDate());


  //요일
  //1월요일, 2화요일, 3수요일, 4목요일, 5금요일, 6토요일, 7일요일
  console.log(today_date.getDay()); 