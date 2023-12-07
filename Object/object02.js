let test = 'c';             // 치환된다 test = c
let obj ={
    a:10,
    b:20,
    [test]:30,
    f1: function(){
        console.log('f1:', this.a, this.b);
    },
    f2: ()=>{
        console.log('f2:', this.a, this.b);
    },
    f3: function(){
        for(const key in this){
            console.log(key, this[key]);
        }
    },
    
};

obj.f1();
obj.f2();
obj.f3();

console.log('-------------------');
console.log(obj);



console.log('-------------------');
obj.d = 40;
console.log(obj);


console.log('-------------------');
let test02 = 'e';
obj[test02] = 50;

console.log(obj);
console.log('end');
