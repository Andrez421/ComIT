let f0 = 0;
let f1 = 1;
let fN = null;

for(let i = 0; i < 10; i++) {
    fN = f0 + f1;
    f0 = f1;
    f1 = fN;
    console.log(fN);
}