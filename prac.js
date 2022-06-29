<<<<<<< HEAD
matrix = [[1,2,3],[4,5,6],[7,8,9]]
    var n = matrix.length;
    var n2 = Math.floor(n / 2);
    // 1 2 3     7 8 9
    // 4 5 6  => 4 5 6
    // 7 8 9     1 2 3
    for (var i = 0; i < n2; i++) {
      for (var j = 0; j < n; j++) {

        swap(matrix, i, j, n - 1 - i, j);
      }
    }
    // 7 8 9     7 4 1
    // 4 5 6  => 8 5 2
    // 1 2 3     9 6 3
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        console.log("2중for문")
        console.log(i,j,j,i)
        swap(matrix, i, j, j, i);
      }
    }

  
  function swap (matrix, x1, y1, x2, y2) {
    var tmp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = tmp;
  };
=======
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
>>>>>>> 8b103193e0e872fc04d068d6266ff77797ca3393
