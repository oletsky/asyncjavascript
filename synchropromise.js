"use strict";
let promise=new Promise((resolve, reject) => {
    console.log("Promise worked");
    resolve("THE NEW VALUE");
    }
    );
promise.then((r)=>console.log("The value of promise is "+r));
console.log("After reading");