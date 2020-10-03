"use strict";
Promise.resolve(1)
.then(r=>{
    return new Promise((resolve,reject)=>
    setTimeout(()=>
    {console.log(r++); resolve(r);},5000
    ));
})
.then(r=>{console.log(r++); return r;});