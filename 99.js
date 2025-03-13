// another example of closer

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){      // return function will return with a = varA b = varB and X = arg  so that is called closer
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans();