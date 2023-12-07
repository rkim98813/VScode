// 
const f1 = (f3) =>{
    console.log('아침 먹자');
    f3();
    console.log('저녁 먹자');
}

const f2 = () =>{
    console.log('점심 먹자');
}

const f4 = () =>{
    console.log('먹지 말자');
}

f1(f2);
console.log("================================");
f1(f4);
console.log("================================");
f1( () => {
    console.log('공부 하자');
} );


( function () {
    return function () {
        console.log(1);
    }
    
}) ()();



