//Hosting

//1.
function f1() {
    console.log(1);
}
f1();

//2.
const f2 = function(){
    console.log(2);
}
f2();

//3.
const f3 = ()=>{
    console.log(3);
}
f3();

//4.
(function(num) {
    console.log(num);    
})(4);

//5.
(()=> {
    console.log(5);    
})();


//6.
((nums) => {
    console.log(nums);
})(6);

//7.
const f7 = ()=>{
    console.log('==========================')
    return 7;
}
console.log(f7());


//8.
const f8 = ()=>{
    console.log('==========================')
    return 8;
}
console.log(f8());


//9.
console.log(
    ((n)=> {
        console.log('==========================')
        return n;    
    })(9)
);


console.log('==========================')

//10. 생성자 함수( ==클래스)
function F10(){
    this.num = 10;
    this.func01 = function() {
        console.log(this.num);
    };
    this.func02 = () => {
        console.log(this.num);
    };
}
const obj = new F10();
obj.func01();
obj.func02();


//11. 생성자 함수( ==클래스)
function f11() {
    //arguments
    console.log('f11 call');
    console.log(typeof arguments);
    console.log(arguments.length);
    console.log(
        arguments[0],
        arguments[1],
        arguments[2],
    );
    
    for (const key in arguments) {
        console.log(key, arguments[key]);
    }

    let obj = {
        k1: 100,
        k2: 200,
        k3: 400,
    };
    console.log(typeof obj);

    for (const key in obj){
        console.log(key, obj[key]);
    }

}
f11(10,20,30);

//12. 생성자 함수( ==클래스)
const f12 = function () {
    const f13 = function(){
        console.log('call f13');
    }
    f13();

    console.log(typeof f13);

    //return 모든 타입 가능 // num str bool obj function
    //returning f13 (below)
    return function(){
        console.log('f14');
    };
}

f12();
const f14 = f12();
f14();
// return 된 함수를 다시 불러온다
f12()();

