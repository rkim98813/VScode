let ar = [11, 22, 33];
console.log(1, ar);

// toString()
let br = ar.toString();
console.log(2, typeof br, br);

// pop()*
let num = ar.pop();

// (method) Array<number>.pop(): number | undefined
console.log(3, ar, num);

// push()*
num = ar.push(88);
console.log(4, ar, num);

// concat()
let cr = [55, 66];
let dr = ar.concat(cr);
console.log(5, ar);
console.log(6, dr);

//let er = [...{},...{}];
let tr = [1111,2222];
let er = [...ar,...cr];
console.log(7, tr);
console.log(8, er);


