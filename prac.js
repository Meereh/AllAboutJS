<<<<<<< HEAD
/* 숫자 카드 */

/* user code */
function answer(card, select) {
  let result = [];
  let count = 0;

  card.forEach((x)=>{
    console.log(x);
  });

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [-6, -1, 6, 1, 1],
    [-2, 1, 3],
  ],

  // TC: 2
  [
    [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
    [10, 9, -5, 4, 6, -10],
  ],

  // TC: 3
  [
    [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
    [4, 5, 1, 10, -2, -3, 3, -8],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
=======
const number = [1,2,3,4,5];

number.map((ele, idx, source)=>{
    console.log(ele);
    console.log(idx);
    console.log(source);
})
>>>>>>> 9cfee61f39e773649b655e4e9132221e8aad021b
