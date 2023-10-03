function fizzBuzz(n) {
    let res = ""
    console.log(`introduciendo un ${n} nos da: ${n % 3}`)
    if (n === 0) {
        return "0";
    }
    if (n % 3 == 0) {
        res += "fizz";
    }
    if (n % 5 == 0) {
        res += "buzz";
    }
    if (res != "") {
        return res;
    }
    return n.toString();
}
module.exports = fizzBuzz;