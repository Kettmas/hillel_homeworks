function checkProbabilityTheory (count) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    for (let i = 0; i < count; i++) {
let rnd = Math.floor(Math.random() * (1000 - 100 +1)) + 100;
console.log (rnd);
if (rnd % 2 === 0) {
evenNumbers++;
} else {
oddNumbers++;
}
    }
let evenPercent = (evenNumbers / count) * 100;
let oddPercent = (oddNumbers / count) * 100;

console.log ("Кількість згеренованих чисел: " + count);
console.log ("Кількість парних чисел: " + evenNumbers);
console.log ("Кількість непарних чисел: " + oddNumbers);
console.log ("Відсоток парних чисел: " + evenPercent + "%");
console.log ("Відсоток непарних чисел: " + oddPercent + "%");
}

checkProbabilityTheory (20);

