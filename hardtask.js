"use strict";
const waittime = 0;
let operation = () => {console.log("Operation finished");};

process.nextTick(operation);

let c=0;
for (; c<1000000; c++) {
    let v=1./33;
}
console.log(c);

