"use strict";
let p=Promise.resolve(1);
p.then(r=>{console.log(r++); return r;});
p.then(r=>{console.log(r++); return r;});