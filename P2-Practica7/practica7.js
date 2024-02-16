function Xfactorial() {
    let Xnum = 5;
    let solution = 1;

    for (let i = Xnum; i >= 1; i--) {
        solution *= i;
    }
    return solution;
}

console.log(Xfactorial());