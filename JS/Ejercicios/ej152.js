const usuario = {
    username: null,
    password: null,
    saludar: function() {
        if (this.username !== null) {
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.log('Este usuario no tiene username');
        }
    },
    updateUsername: function(newUsername) {
        this.username = newUsername;
    },
    updatePassword: function(newPassword) {
        this.password = newPassword;
    }
};

usuario.updateUsername('Andres');
usuario.updatePassword('42424242');
usuario.saludar();
console.log(usuario.password);