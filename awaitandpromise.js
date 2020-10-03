async function f(){
    return 1;
}

async function demo1() {
    let r=await f();
    console.log(r)
}

//What if omit await?
//How to apply f() without await?

demo1();
