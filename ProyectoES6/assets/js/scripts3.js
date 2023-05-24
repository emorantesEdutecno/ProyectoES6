function saludar(nombre){
    let saludo = 'Hola';
    saludo = 'Adios';
    if(nombre === 'Sacha'){
        let saludo = 'Chau';
        console.log ('Aca saludo vale: '+saludo);
    }
    console.log('Aca saludo vale: '+saludo);
}

saludar('Sacha');