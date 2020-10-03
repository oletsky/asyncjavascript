"use strict";
let promise=new Promise((resolve, reject) => {
    setTimeout(()=>{
        let r=Math.random();
        if (r>0.5) resolve(r);
            else reject(new Error(`Low level ${r}`))
    },5000)
});
promise.then(r=>{console.log("Success: "+r);})
    .catch(err=>console.log(err));
