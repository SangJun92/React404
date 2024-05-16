// Number
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[0]);

// String
let arr2 = ["h", "e", "l", "l", "o"];
console.log(arr2[1]);

// Number와 String 자료형들로 구성된 배열
let arr3 = [1, "h", 2, "l"];
console.log(arr3[2]);

// 다양한 자료형들로 구성된 배열
let arr4 = [true, 1, undefined, false, "h", 2, null, "i"];
console.log(arr4[3]);

// 대입연산자(Assignment operators)
let a = 4;
let b = 2;
console.log(a, b);

// 산술 연산자(Arithmetic operators)
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b); // 나머지
console.log(a ** b); // 제곱 a의 b승

// 산술연사 + 대입연산자
a += b; // a=a+b
console.log(a);
a -= b;
console.log(a);
a * b;
console.log(a);
a /= b;
console.log(a);

// 증감 연산자(++, --)
a = 1;
b = a++; // postfix
console.log(a, b);

let c = 1;
let d = ++c; // prefix
console.log(c, d);

// 비교연산자(Comparison operators)
a = 1;
b = 2;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
console.log(a === b); //데이터타입까지비교
console.log(a !== b);

// 논리연산자
a = true;
b = false;
console.log(a && b);
console.log(a || b);
// 삼항연산자
a = 10;
b = 20;
console.log(a > b ? a : b);
