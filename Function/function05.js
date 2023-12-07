const f2 = () => {
    //return 100; --> 값이 없다면 Undefined로 f1이 값을 받는다.
    return 100;
}

const f1 = () => {
    //return f2;
    return f2();
}
console.log(f1());
console.log("===============================");


// // 비동기 (함수): 실행 순서를 지키지 않는다.
// console.log(1);

// setTimeout(
//     () =>{
//         console.log(3); // 나중에 출력된다  -> 2초마다 계속 실행된다
//     },
//     2000            
// );    
// console.log(2);     //비동기 함수다. 먼저 출력된다




console.log("===============================");

let id = setInterval(
    () =>{
        console.log(1);
    }, // 나중에 출력된다
    2000            
);
console.log(200);    

setTimeout(
    () =>{
        clearInterval(id);// 나중에 출력된다
    },
    2000
);    
console.log(300);     //비동기 함수다. 먼저 출력된다


console.log("===============================");
// for (let i = 0; i < 3; i++) {        //옛날 방식
    
//     ( (iii)=>{
        
//         setTimeout(() => {
//             console.log(iii);  
//           }, 
//           1000
//           );
//     }) (i);

// }

for (let i = 0; i < 3; i++) {       //1초 후에 전부 출력
    
    setTimeout(() => {
        console.log(i);  
      }, 
      1000
      );
}

let str = '';
str += 'let a = 1000;';
str += 'console.log(a)'
eval(str);

// let str = '';
// str += 'let a = 1000 ';
// str += 'console.log(a) ';
// eval(str);

