"use strict";

let f=()=>console.log("Test function");
let g=()=>console.log("Other function");

Promise.resolve().then(f)
    .then(g);