let ar = [
    10,
    20,
    30,
    'tiger',
    true,
    [],
    {}
];

for (const index in ar){
    console.log(index, ar[index]);
}
console.log('===================================');

// value, item. i
for (const value of ar){
    console.log(value);
}
console.log('===================================');


ar.forEach(function(){});
ar.forEach(() => {console.log(1000);});
ar.forEach((a) => {console.log(a);});
ar.forEach((a,b) => {console.log(a,b);});
ar.forEach((a,b,c,d) => {console.log(a,b,c,d);});

ar.forEach((v,i)=>{});
console.log('===================================');

//원본 데이터를 가공해서 새로운 데이터를 생성할때
let br = ar.map(v => {
    return v * 10;
});

console.log(ar);
console.log(br);


let cr = ar.map(v=> {
    if(v%2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
})
console.log(cr);


let dr = ar.map()