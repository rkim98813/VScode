// 변수 선언
// 1. var, let, const

let a = 10;
console.log(typeof a);
console.log('--------------');
console.log(typeof(a));

let b = 'tiger';
console.log(typeof b);

let c = true; //false
console.log(typeof c);

let d = [];
console.log(typeof d);

let e = {};
console.log(typeof e);

let f = function(){};
console.log(typeof f);

let h = 3.14;
console.log(typeof h);

let obj = {
    a: 10,
    b: 'tiger',
    c: true,
    d: [],
    e: {},
    f: function(){},
    g: undefined,
}

console.log(obj);

let obj02 = {
    a:{
        b:{
            c:{
                d: 10,

            },
        },
    },
}

console.log(obj02);
