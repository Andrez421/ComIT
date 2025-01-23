let fibonacci = function() {
let f0 = 0;
let f1 = 1;
let fN = null;
let cont = 0;

do{
    fN = f0 + f1;
    f0 = f1;
    f1 = fN;
    console.log(fN);
    cont++;
}while(cont < 10);

}
fibonacci();
fibonacci();
fibonacci();
