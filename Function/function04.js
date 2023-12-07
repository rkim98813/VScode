const f1 = ()=>{
    let a = 100;
    return ()=>{
        console.log(a);
    };
}

f1()();

let f2 = function(a){
    return a * 10;
}
console.log(f1(3));

let f4 = a => a * 10;
console.log(f4(4))

let f5 = () => {
    // return 10;
    // return 'tiger';
    // return true;
    // return () => {};
    // return [];
    return {
        a:10,
        b:20,
        c:30 
    };
}
let temp = f5(); 
console.log(temp.a, temp.b, temp.c);



let f6 = () => ({x:10, y:20}); 
// Assuming x and y are variables or values you want to use
// let x = f6().x;
// let y = f6().y;
let { x, y } = f6();
console.log(x, y);


// const f8 = (aaa) => {       //3 is delivered
//     return (bbb) => {       //4 is delivered
//         return aaa + bbb;
//     }
// }
// console.log(f8(3)(4));

//Above is the same (이중회로)
const f8 = aaa => bbb => aaa +bbb;
console.log(f8(3)(4));



const yourfunc = name => amount => category => {
    console.log(`Name: ${name}, Amount: ${amount}, Category: ${category}`);
};

// Example usage
yourfunc('tiger')(100)('test');
