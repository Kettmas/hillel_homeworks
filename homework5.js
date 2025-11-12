var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

price() {
let sum = 0;
for (let key in services) {
if (typeof services[key] === "string") {
sum += Number.parseInt(services[key]);
}
}
return sum;
},

minPrice() {
let min = Infinity;
for (let key in services) {
if (typeof services[key] === "string") {
let value = Number.parseInt(services[key]);
if (value < min) min = value;
}
}
return min;
},

maxPrice() {
let max = -Infinity;
for (let key in services) {
if (typeof services[key] === "string") {
let value = Number.parseInt(services[key]);
if (value > max) max = value;
}
}
return max;
}
}
console.log("Загальна вартість всіх послуг: " + services.price());
console.log("Мінімальна ціна у прайсі: " + services.minPrice());
console.log("Максимальна ціна у прайсі: " + services.maxPrice());