require('colors');

const functions = require('./modules/functions.js');



const main = async() =>{

    console.clear();

    const numero = -196;
    functions.interfazSigno(numero);

    const caracter = 'a';
    functions.interfazEncontroCaracter(caracter);

    const bebida = 'gaseosa';
    functions.interfazbusquedaBebida(bebida);

    const medio = 'moto';
    functions.interfazmedioTransporte(medio);

    const Menu = 'pescado';
    functions.interfazescogerMenu(Menu); 

    const Pagoaccesojuegos = '3500';
    functions.interfazPagoaccesojuegos(Pagoaccesojuegos);

    const Numero = '20';
    functions.interfazcontarNumero(Numero);

    const numer = '4524';
    functions.interfaznumerosPares(numer);

    const nume = '8';
    functions.interfaztablaMultiplicar(nume);

    const base = '2';
    functions.interfazcontadorBase(base);

    const clave = 'carreter'
    functions.inicioSesion(clave);

    const numeros = [22, 17, 3, 192, 77];
    functions.minimoMaximo(numeros);

    const numeros2 = [44, 6, 3, 97, 32];
    functions.numerosPares2(numeros2);

};

main();