"use strict";
function f1() {console.log("First"); }
function f2() {console.log("Second");}
function f3() {console.log("Third");}
function f4() {console.log("Fourth")};

setImmediate(f3);
setTimeout(f1,1000);
setTimeout(f2,0);

process.nextTick(f4);
console.log("Miaoo!");
