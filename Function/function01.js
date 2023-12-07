function func01(){
    console.log(1);
}   

let func02 = function(){
    console.log(2);
}

func01;
func02;


// 즉시 실행 함수(IIFE)
(function(){
    console.log('call');
})();


(function(a,b,c){
    console.log(a,b,c);
})(10, 'tiger', true);


console.log('start');
(function(num){
    let start = new Date().getTime();
    while (new Date().getTime() < start + num); 

})(3000); // num = 3000ms
console.log('end -> displayed after 3000ms');
console.log('================================');



let a = '123';
console.log(123 === '123');
console.log(123 === a);
console.log(123 === 123);

let state = true;
if (true) {
    console.log(1);
    
}

if (state) {
    console.log(1);
    
}
// 짧은 if 문
state && console.log(1);

if (!state) {
    console.log(2);
    
}
//부정에 해당하는 짧은 if 문
state || console.log(2);


