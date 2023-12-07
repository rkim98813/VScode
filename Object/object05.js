let ar = [
    {name: '홍길동01', age: 10},
    {name: '홍길동02', age: 20},
    {name: '홍길동03', age: 30},
];

console.log(ar);
console.log('===========================');
for (const index in ar){
    console.log(index, ar[index]);
}

console.log('===========================');
for (const value in ar){
    console.log(value.name, value['age']);
}

console.log('===========================');
ar.forEach((v,i) =>{
    console.log(v,i);
});

console.log('===========================');
// let br = ar.map(( v => {
//     return v;
// }));
//same as above
let br = ar.map(v => v);
console.log(br);

