let hr = [
    { name: 'daeil01', age: 10 },
    { name: 'daeil02', age: 10 },
    { name: 'daeil03', age: 10 },
];

console.log('=====================');
console.log(
    hr.find(person => {
        return person.name === 'daeil02';
    })
);


let ir = [1,2,3];
console.log(
    ir.find(v=> v===2)
);

console.log(
    [1,2,3].find(v=> v===2)
);



//map, reduce
[1,2,3].reduce( (a,b) => {
    console.log(a,b);
    return a+b;
});

console.log(
[{x:1},{x:2},{x:3}].reduce( (a,b) => {
    console.log(a,b);
    return a+b.x;
}, 0)
);



console.log('=====================');
let ar = [
    [1,2], //0
    [3,4], //1
    [5,6], //2
];

ar.push([7,8]);
console.log(ar);
console.log(ar[0]);
console.log(ar[0][0]);
console.log(ar[0][1]);
console.log(ar[1][0]);
console.log(ar[1][1]);
console.log(ar[2][0]);
console.log(ar[2][1]);
console.log(ar[3][0]);
console.log(ar[3][1]);


let rr = [ [1,2],[3,4],[5,6]].reduce(
    (a,b) => {
        console.log(a,b);
        return a.concat(b)
    }, []
);

console.log(rr);



console.log(
    'tiger' in {tiger:10, lion:20,} ? true:false
);


let kk = ['tiger', 'lion', 'tiger', 'dog', 'lion'];
let result = kk.reduce( (a,b)=> {
    if (b in a) {
        a[b]++;
    }else{
        a[b]=1;
    }
    return a;
}, {});
console.log(result);


let zz = ['tiger', 'lion', 'tiger', 'dog', 'lion'];
console.log(zz.reduce( (a,b)=> {
    if (b in a) {
        a[b]++;
    }else{
        a[b]=1;
    }
    return a;
}, {})
);
