const prompt = require('prompt-sync')({ siging: true})

const opciones = [
{opcion: 'piedra'}, 
{opcion: 'papel'}, 
{opcion: 'tijera'} 
]
let opcionElegida = prompt(`Ingrese una opcion ' piedra, papel o tijera ': `)
let opcionRandom = opciones[Math.floor(Math.random() * opciones.length)].opcion;
const jugar = (OE, OR) =>{

    if (OE == OR){
        console.log(`Ambos eligieron '${OE}', es un empate!! `);
    }else{
        console.log(`Opcion elegida por el Usuario es: ${opcionElegida}`);
        console.log(`opcion elegida por el Ordenador es: ${OR}`);
        console.log('---------------------------------------------------');
        if ((OE === 'piedra' && OR === 'tijera') || (OE === 'papel' && OR === 'piedra') || (OE === 'tijera' && OR === 'papel')){
            console.log(`El Usuario a Ganado!!🎉🎉🎉`);
        }else{
            console.log('El usuario a perdido!!😒');
        }
    }
}

jugar(opcionElegida, opcionRandom)