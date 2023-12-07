let obj = {
    s: 'tiger',     // 속성
    n: 10,
    b: true,

};
console.log(obj);

// 1.
console.log(obj.s, obj.n, obj.b);
// 2.
console.log(obj['s'], obj['n'], obj['b']);
// 3.
for (const key in obj){
    console.log(key, obj[key]);
}

with(obj){
    console.log(n);
}

console.log(obj);

// 추가가 되었지만 아주 위험한 코드이다.
obj.num = 100;
console.log(obj);

// 삭제
delete(obj.s);
console.log(obj);

// 추가
obj.f1 = () =>{console.log(99);};
console.log(obj);
obj.f1();

// 삭제
delete(obj.f1);
console.log(obj);


