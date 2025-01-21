let f0 = 0;
let f1 = 1;
let fN = null;
let cont = 0;

while (cont < 10) {
    fN = f0 + f1;
    f0 = f1;
    f1 = fN;
    console.log(fN);
    cont++;
}