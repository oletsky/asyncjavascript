"use strict";
let promise=new Promise((resolve, reject) => {
    setTimeout(()=>{console.log("Promise worked");
    resolve("THE NEW VALUE");
    },5000)
});
promise.then((r)=>{
    console.log("The value of promise is "+r);
    console.log(promise);
});
console.log(promise);
console.log("After reading");