let ar = ['tiger', 'lion', 'dog'];
console.log(ar.join(','));
console.log(ar.join('*'));
console.log(ar.join('/'));
console.log(ar.join('+'));
console.log(ar.join('-'));

//revers()*
let br = ar.reverse();
console.log(br);

let result = ar.shift();
console.log(ar, result);

let num = ar.unshift('cat');
console.log(88, ar, num);

num = ar.unshift('cat1','cat2','cat3');
console.log(ar);

let cr = [80, 20, 10, 15];
console.log(cr);

let dr = cr.sort(); //잘못된 프로그램
console.log(1, cr);
console.log(2, dr);

let er = [52, 273, 103, 32];
er.sort();
console.log(er);

let fr = [52, 273, 103, 32];
//fr.sort(((a,b)=> a> b ? +1:-1));
fr.sort(((a,b)=> a-b));
console.log(fr);

let gr = [
    {
        num: 30,
        str: '월',

    },
    {
        num: 20,
        str: '화',

    },
    {
        num: 50,
        str: '수',

    },
];

// let fastSort = (a, b)=>{
//     return a - b;
// }
// gr.sort((a,b) => a -b);

let fastSort = (a, b)=>{
    return a.num - b.num;
    }
    gr.sort(fastSort);
    console.log(gr);
    console.log('stop');