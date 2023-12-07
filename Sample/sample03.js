let str = '10';
let num = 10;
console.log(Number(str) + 10);
console.log(String(num) + 10);
console.log(parseInt(str) + 10);
console.log('===========================')

let n1 = '200';
let n2 = '200원';
console.log(Number(n1) + 10);
console.log(parseInt(n1) + 10);

console.log(Number(n2) + 10);
console.log(parseInt(n2) + 10);
console.log('===========================')

let a = '10';
// sugar code
const b = +'20'; // Number parseInt
const c = +a;
console.log(typeof a, typeof b, typeof c);
console.log('===========================')

// 1. 산술연산
// 2. 관계대소 연산
// 3. 논리연산
console.log(17/3);
console.log(parseInt(17/3));
console.log(17%3);

// 4. 더하기 빼기 ++ --
let b1 = 10;
let b2 = 10;
console.log(b1++);
console.log(++b2);
console.log('===========================')

// 5. 곱하기 제곱
console.log(Math.pow(2,4));
console.log(2**4);
console.log('===========================')
console.log(2**3**2);
console.log((2**3)**2);
console.log(2**(3**2));

// 6. Date()
let d = new Date();
console.log(d.getFullYear(), 'year');
console.log(d.getMonth() + 1, 'month');
console.log(d.getDate(), 'day');
// 0 : 일요일
console.log(d.getDay(), '요일');
console.log(typeof Date);

// 0 : 일요일, 1: 월요일, ..., 6: 토요일
let dayOfWeek = d.getDay();
let daysOfWeekString = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(dayOfWeek, daysOfWeekString[dayOfWeek]);
