// slice(start, end) // start ~ end-1
let ar = [1, 2, 3, 4, 5];
let br = ar.slice(2, 4); // index 2~3
console.log(1, ar);
console.log(2, br);
let cr = [1, 2, 3];
cr.splice(1, 0, 4, 5);
console.log(3, cr);
cr.splice(2, 2, 6, 7);
console.log(4, cr);


// indexOf
let dr = ['tiger', 'lion', 'dog', 'cat'];
console.log(dr.indexOf('dog'));

let er = ['tiger', 'lion', 'dog', 'cat', 'dog', 'cat'];
console.log(fr.indexOf('dog', 3)); // index 3 부터 찾는다. 찾은 index를 리턴

let fr = ['tiger', 'lion', 'dog', 'cat', 'dog', 'cat'];
console.log(fr.indexOf('doggy', 0)); // 0번째부터 찾음. 없으면 -1 리턴

let gr = ['tiger', 'lion', 'dog', 'cat', 'dog', 'cat'];
console.log(gr.lastIndexOf('dog')) // 뒤에서부터 찾음

//every 모든 원소가 40보닺 가다 -> true
let hr = [1, 30, 39, 29, 10, 13];
console.log(
    er.every( v =>{
        return v < 40;
    } )
);