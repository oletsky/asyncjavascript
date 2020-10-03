"use strict";
let fs=require("fs");

let promise=new Promise((resolve, reject) => {
    fs.readFile("test.txt", "utf8",
        function(error,data){
        if (error) reject(error);
           else resolve(data);
        });

});
promise.then(r=>{console.log(r);})
    .catch(err=>console.log(err));
