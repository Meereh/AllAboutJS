const person = { fname: "John", lname: "Bob", age: 25 };

//for ~ in : key/value 형태를 반복, 객체 키 개수만큼 반복
let text = "";
for (let x in person) {
    text += person[x];
}

console.log(text)



//for ~ of : 
let language = "JavaScript";
let text1 = "";

for (let x of language) {
    text1 += x;
    console.log(x);
}

