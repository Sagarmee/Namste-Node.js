function calculateSum(a,b){
    const sum = a + b;

    console.log(sum);
}

function calcuatediv(a,b){
    const div = a / b;

    const tofixed = div.toFixed(2);
    console.log(tofixed);
}

module.exports = {
    calculateSum : calculateSum,
    calcuatediv : calcuatediv
}