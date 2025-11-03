function pow(x,y) {
    let result = 1;
for (let i = 1; i <= y; i++) {
    result = result * x;
}  
return result;
}
let res2 = pow(5,7);
console.log(res2);