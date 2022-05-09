//10진수 -> 16진수 
var dec = 123;
var hex = dec.toString(16); // === "7b"


//10진수 -> 2진수
var dec = 123;
var bin = dec.toString(2); // === "1111011"


//16진수 -> 10진수
var hex = "7b";
var dec = parseInt(hex, 16); // === "123"


//16진수 -> 2진수 (* 10진수로 바꿨다가 다시 2진수로 바꾼다)
var hex = "7b";
var bin = parseInt(hex, 16).toString(2); // === "1111011"


//2진수 -> 10진수
var bin = "1111011";
var dec = parseInt(bin, 2); // === "123"


//2진수 -> 16진수 (* 10진수로 바꿨다가 다시 2진수로 바꾼다)
var bin = "1111011";
var hex = parseInt(bin, 2).toString(16); // === "7b"

