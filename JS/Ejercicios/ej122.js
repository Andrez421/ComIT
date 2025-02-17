const ingredientes = [
    "Carne de cerdo",
    "Tomate",
    "Pollo",
    "Lechuga",
    "Lomo",
    "Zanahoria",
    "Rúcula"
];

const vegetariano = ingredientes.filter(ingrediente => 
    ingrediente !== "Carne de cerdo" && 
    ingrediente !== "Pollo" && 
    ingrediente !== "Lomo"
);

console.log("Menú regular:", ingredientes);
console.log("Menú vegetariano:", vegetariano);