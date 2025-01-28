const usuario = {
    usermane : 'Batman',
    password : 'Alfred1960KPO!',
};

function autenticarUsuario(usuario) {
    if (usuario.usermane === 'Batman' && usuario.password === 'Alfred1960KPO!') {
        return true;
    } else {
        return false;
    }
}

if (autenticarUsuario(usuario.usermane, usuario.password)) {
    console.log(usuario);
} else {
    console.log('Usuario no autenticado');
}

