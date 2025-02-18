describe("Nuestro primer test", () => {
    test("las variables estan definidas", () => {
        expect(nombre).toBeDefined();
        expect(apellido).toBeDefined();
        expect(edad).toBeDefined();
        expect(fechadenacimiento).toBeDefined();
        expecto(direccion).toBeDefined();
    });
    
    