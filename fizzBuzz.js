function fizzBuzz(n) {
    if (n % 3 == 0) {
        return "fizz";
    }
    return n.toString();
}
module.exports = fizzBuzz;