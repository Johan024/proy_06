const functions = {};

const signo = (numero) => {
    if (numero >= 0) {
        return 'positivo'
    } else {
        return 'negativo'
    }
}
const interfazSigno = (numero) => {
    //console.clear();
    console.log(`********************************`.red);
    console.log(`*        FUNCION SIGNO         *`.bgRed);
    console.log(`********************************`.red);
    console.log(`*   el numero ${numero} es `.bgCyan +
                functions.signo(numero).bgCyan+ `  *`.bgCyan);
    console.log(`********************************\n`.red);
}


const encontroCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'se encuentra';
    } else {
        return 'no se encuentra';
    }
}
const interfazEncontroCaracter = (caracter) => {
    console.log(`********************************`.red);
    console.log(`*  FUNCION ENCONTRO CARACTER   *`.bgRed);
    console.log(`********************************`.red);
    console.log(`*  el caracter ${caracter.toUpperCase()} `.bgCyan +
                functions.encontroCaracter(caracter.toUpperCase()).bgCyan+ `  *`.bgCyan);
    console.log(`********************************\n`.red);
}


const busquedaBebida = (bebida) => {
    const datos = ['VINO', 'CERVEZA', 'GASEOSA', 'AGUA'];
    if (datos.includes(bebida)) {
        return 'se encuentra en la barra';
    } else {
        return 'se encuentra en la tienda';
    }
}
const interfazbusquedaBebida = (bebida) => {
    console.log(`***********************************************`.red);
    console.log(`*          FUNCION BUSQUEDA BEBIDA            *`.bgRed);
    console.log(`***********************************************`.red);
    console.log(`*  la bebida ${bebida.toUpperCase()} `.bgCyan +
                functions.busquedaBebida(bebida.toUpperCase()).bgCyan+ ` *`.bgCyan);
    console.log(`***********************************************\n`.red);            
}


const medioTransporte = (medio) => {
    const datos = ['AVION', 'BUS'];
    const datos2= ['BICICLETA', 'MOTO'];
    if (datos.includes(medio)){
        return "Recuerda traer dinero para el pasaje";
    } else if (datos2.includes(medio)) {
        return "Recuerda traer ropa comoda";
    } else { 
        return "Este medio de transporte no se encuentra"
    }
}
const interfazmedioTransporte = (medio) => {
    console.log(`*******************************************************************`.red);
    console.log(`*                   FUNCION MEDIOS TRANSPORTE                     *`.bgRed);
    console.log(`*******************************************************************`.red);
    console.log(`*         Si deseas ir en ${medio.toUpperCase()} `.bgCyan +
                functions.medioTransporte(medio.toUpperCase()).bgCyan+ `         *`.bgCyan);
    console.log(`*******************************************************************\n`.red);
}


const Menu = (Menu) => {
switch (Menu) {
    case 'CARNE':
        return 'te recomiendo tomar VINO TINTO';
    case 'PESCADO':
        return 'te recomiendo tomar VINO BLANCO';
    case 'VERDURA':
        return 'te recomiendo tomar AGUA';
    default:
        return 'te recomiendo tomar AGUA';
    }
}
const interfazescogerMenu = (Menu) => {
    console.log(`***************************************************************`.red);
    console.log(`*                        FUNCION MENU                         *`.bgRed);
    console.log(`***************************************************************`.red);
    console.log(`*      Si deseas ${Menu.toUpperCase()} `.bgCyan + 
                functions.Menu(Menu.toUpperCase()).bgCyan +`      *`.bgCyan);
    console.log(`***************************************************************\n`.red);
}


const Pagoaccesojuegos = (Pagoaccesojuegos) => {
    const juegos = ['Consolas', 'Juegos 2d', 'Juegos 3D', 'Realidad Virtual'];
    
    if (Pagoaccesojuegos >= 4000, (juegos.includes(Pagoaccesojuegos))) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D', 'Realidad Virtual'];
    } else if (Pagoaccesojuegos >= 3000) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D'];
    } else if (Pagoaccesojuegos >= 2000) {
        return ['Consolas', 'Juegos 2D'];
    } else if (Pagoaccesojuegos >= 1000) {
        return ['Consolas'];
    } else {
        return 'ERROR: Debes ingresar mas dinero para acceder a los juegos'
    }
 }
const interfazPagoaccesojuegos = (Pagoaccesojuegos) => {
    console.log(`***************************************************************`.red);
    console.log(`*               FUNCION PAGO ACCESO JUEGOS                    *`.bgRed);
    console.log(`*     Puedes acceder a jugar en  `.bgCyan + 
                functions.Pagoaccesojuegos(Pagoaccesojuegos.toUpperCase()) +`      *`.bgCyan);
    console.log(`***************************************************************\n`.red);
}


const Numero = (Numero) => {
    if (Numero <= 0) {
        console.log("ingresa un número positivo mayor que cero.");
        return;
      }
    console.log("Enteros positivos hasta", Numero);
    for (let i = 1; i <= Numero; i++) {
      console.log(i);
    }
}
const interfazcontarNumero = (Numero) => {
    console.log(`***************************************************************`.red);
    console.log(`*               FUNCION CONTAR NUMERO                    *`.bgRed);
    console.log(`*    `.bgCyan + 
                functions.Numero(Numero.toUpperCase()) +`      *`.bgCyan);
    console.log(`***************************************************************\n`.red);
}


const numer = (numer) => {
    if (numer < 0) {
        console.log("numero positivo.");
        return;
      }
      console.log("Números pares incluidos en el numero ", numer);
      const numerStr = numer.toString();
      for (let i = 0; i < numerStr.length; i++) {
        const digito = parseInt(numerStr[i]);
        if (digito % 2 === 0) {
          console.log(digito);
        }
      }
}
const interfaznumerosPares = (numer) => {
    console.log(`***********************************************************`.red);
    console.log(`*               FUNCION NUMEROS PARES                     *`.bgRed);
    console.log(`*    `.bgCyan + 
                functions.numer(numer.toUpperCase()) +`      *`.bgCyan);
    console.log(`***********************************************************\n`.red);
}


const nume = (nume) => {
    for (let i = 1; i <= 10; i++) {
        let resultado = nume * i;
        console.log(`${nume} x ${i} = ${resultado}`.black.bgCyan);
    }
}
const interfaztablaMultiplicar = (nume) => {
    console.log(`***********************************************************`.red);
    console.log(`*             FUNCION TABLA MULTIPLICAR                   *`.bgRed);
    console.log(`*    `.bgCyan + 
                functions.nume(nume.toUpperCase()) +`      *`.bgCyan);
    console.log(`***********************************************************\n`.red);
}


const base = (base) => {
    for (let i = 0; i < base; i++) {
        for (let j = 0; j < base; j++) {
          const num = i * base + j;
          console.log((`Número en base ${base}: ${num.toString(base)}`.cyan));
        }
      }
}
const interfazcontadorBase = (base) => {
    console.log(`***********************************************************`.red);
    console.log(`*             FUNCION CONTADOR BASE                   *`.bgRed);
    console.log(`*    `.bgCyan + functions.base(base) + `      *`.bgCyan);
    console.log(`***********************************************************\n`.red);
}


const inicioSesion = (clave) => {
const datos3 = ['carretera', 'senacba', 'mosquera']; 
let intentos = 0;   
    if (datos3.includes(clave)) {
        console.log('******************************************************'.bgRed)
        console.log('                 Acceso concedido                     '.bgCyan);
        console.log('******************************************************\n'.red)
    } else {
        intentos++;
        console.log('******************************************************'.bgRed)
        console.log('                 Acceso denegado                      '.bgRed);
        console.log('******************************************************\n'.red)
    }
        if (intentos >= 3) {
            mostrarAlertaIntruso();
        }
}
function mostrarAlertaIntruso() {
    require('colors'); 
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++'.bgRed)
    console.log('¡ALERTA INTRUSO!');
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++\n'.bgRed)

}


function minimoMaximo(numeros) {
    if (!numeros || numeros.length === 0) {
    }
    let minimo = numeros[0];
    let maximo = numeros[0];
    let suma = 0;
    for (const numero of numeros) {
        if (numero < minimo) {
            minimo = numero;
        }
        if (numero > maximo) {
            maximo = numero;
        }
        suma += numero;
    }
    const promedio = suma / numeros.length;
    
    console.log(`******************************************************`.red);
    console.log(`*             FUNCION MINIMO MAXIMO                  *`.bgRed);
    console.log(('Número menor:'), minimo);
    console.log(('Número mayor:'), maximo);
    console.log(('Promedio:'), promedio);
    console.log('******************************************************\n'.red);
}


function numerosPares2(numeros) {
    if (!numeros || numeros.length === 0) {
      console.log(colors.red('El arreglo de números está vacío.'));
      return;
    }
  
    const numerosPares = numeros.filter(numero => numero % 2 === 0);

    console.log(`******************************************************`.red);
    console.log(`*             FUNCION NUMEROS PARES                  *`.bgRed);
    console.log((`Número de números pares: ${numerosPares.length}`.cyan));
    console.log('******************************************************'.red);
    console.log(('Números pares:'.cyan), numerosPares.join(', ').cyan);
    console.log('******************************************************'.red);
  }

functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontroCaracter = encontroCaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazbusquedaBebida = interfazbusquedaBebida;
functions.medioTransporte = medioTransporte;
functions.interfazmedioTransporte = interfazmedioTransporte;
functions.Menu = Menu;
functions.interfazescogerMenu = interfazescogerMenu;
functions.Pagoaccesojuegos = Pagoaccesojuegos;
functions.interfazPagoaccesojuegos = interfazPagoaccesojuegos
functions.Numero = Numero;
functions.interfazcontarNumero = interfazcontarNumero;
functions.numer = numer;
functions.interfaznumerosPares = interfaznumerosPares;
functions.nume = nume;
functions.interfaztablaMultiplicar = interfaztablaMultiplicar;
functions.base = base;
functions.interfazcontadorBase = interfazcontadorBase;
functions.inicioSesion = inicioSesion;
functions.minimoMaximo = minimoMaximo;
functions.numerosPares2 = numerosPares2;


module.exports = functions;
