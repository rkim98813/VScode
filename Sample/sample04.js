// 시간 지연
let start = new Date().getTime();
console.log(start);

for (let i = 0; new Date().getTime() < start + 1000; i++){ //start + 1000 = 1000ms delay to be ran
}

console.log('test out after 1000ms delay');


for (var j = 0; new Date().getTime() < start + 1000; j++){
}
console.log(j);
console.log("Delayed output");

for (let q = 0; q < 3; q++) {
    for (let p = 0; p < 4; p++) {
        console.log(q*4+p);
    }
}

while (new Date().getTime() < start + 1000) {
    
};

while (new Date().getTime() < start + 1000);
console.log('end');


