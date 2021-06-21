function multiply(a){
    return (b) =>{
        return (c) =>{
            return a*b*c
        }
    }
}

function addition(a){
    return (b) =>{
        return (c) =>{
            return a+b+c
        }
    }
}

function division(a){
    return (b) =>{
        return (c) =>{
            return a/b/c
        }
    }
}

function subtraction(a){
    return (b) =>{
        return (c) =>{
            return a-b-c
        }
    }
}

console.log(multiply(1)(2)(3))
console.log(addition(1)(2)(3))
console.log(division(10)(2)(5))
console.log(subtraction(2)(6)(7))