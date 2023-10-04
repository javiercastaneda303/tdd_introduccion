function fizzBuzz(n) {
    let res = ""
    try {
        if ("number" !== typeof n) {
            throw new Error("n no es un numero")
            // console.log(`valor incorrecto \n n: ${n} \n typeof n: ${typeof n}`)
            // return ""
        }
    } catch (err) {
        // throw new Error("n no es un numero")
        // throw new Error(`Ups: no entiendo el valor que me estás pasando \n err: ${err}`)
        console.log(`Ups: no entiendo el valor que me estás pasando \n err: ${err}`)
    }
    if (n === 0) {
        return "0";
    }
    if (n % 3 == 0) {
        res += "Fizz";
    }
    if (n % 5 == 0) {
        res += "Buzz";
    }
    if (res != "") {
        return res;
    }
    return n.toString();
}
module.exports = fizzBuzz;