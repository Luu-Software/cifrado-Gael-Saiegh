import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('ingrese una palabra a cifrar/descifrar'); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar('ingrese su clave numerica') ; // Preguntar por la clave de cifrado (número)
let accion: string = preguntar('indique si quiere cifrar o descifrar '); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let clavenumber= Number(claveTexto)
let resultado: string = '' // COMPLETAR

 if (accion==='cifrar') {
 resultado = cifrar(palabra,clavenumber)
}
else { 
 resultado = descifrar(palabra,clavenumber)

     }       
     console.log(resultado);              
     
     