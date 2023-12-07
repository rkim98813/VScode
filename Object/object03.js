const obj01 ={
    a:10,
    b:20
}
const obj02 ={
    c:30,
    d:40
}

const obj03 = Object.assign(obj01,obj02);
console.log(obj03);

//JavaScript 문법 + ES6 문법
const obj04 = {...obj01,...obj02};
console.log(obj04);


let func01 = arg =>{
    console.log('output');
}

func01();
console.log('--------');
func01({...obj01,...obj02});


console.log('--------');
let ar = [10, 20, 30];
console.log(ar, ar.length);

let br = Array();
console.log(br, br.length);

let cr = Array(8);
console.log(cr, cr.length);

let dr = Array(2, 3, 4, 5);
console.log(dr, dr.length);


