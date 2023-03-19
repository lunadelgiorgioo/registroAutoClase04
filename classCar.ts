/* 
Usando la clase Auto: Implementar la clase 
RegistroAutomotor con métodos para consultar 
por un auto en un listado, borrar, actualizar y dar 
de alta
• Partir de la función ya implementada para leer 
archivos
Ejercicio 2
• Implementar la clase Matriz. En vez de consultar 
los valores con los corchetes, se debe hacer 
(desde afuera) a través de un método → get(x, y)
*/
import { Auto } from "./auto";
const fs = require("fs");

let registro: any [] = [];

const data = fs.readFileSync("./listaAuto.json", "utf8");
const cars = JSON.parse(data);
for(let i = 0; i < cars.length; i++){
    registro.push(cars[i]);
}
export class RegistroAutomotor{
    todo(array) {
        console.log(`autos: ${array}`)
    }
    consultar(nombre: string, array: Auto[]){
        let autoEncntrado =  array.find((auto) => auto.nombre === nombre);
        if(autoEncntrado) {
            console.log(nombre, 'el auto esta registrado', autoEncntrado);
            return autoEncntrado
        } else {
            console.log(nombre, 'no esta registrado, verifique los datos.');
        }
    }
    borrar(nombre: string, array: Auto[]): any{
        let autoEncntrado = array.findIndex(auto => auto.nombre == nombre);
        if(autoEncntrado >= 0) {
            array.splice(autoEncntrado, 1);
            console.log(`auto eliminado`);
            console.log(array);
            return array
        } else {
            console.log('auto ', nombre, 'no ha sido eliminado');
        }
    }
    actualizar(nombre: string, array: Auto[], dato: string) {
        let autoActualizar = this.consultar(nombre, array);
        if(autoActualizar) {
            autoActualizar.nombre = dato;
            console.log(`el auto ${nombre} ha sido actualizado y se llama ${dato}`);
        }
    }
        
    darDeAlta(nombre: string, array: Auto[]){
        let verific = array.findIndex((auto) => auto.nombre == nombre);
        if(verific >= 0) {
            array.splice(verific, 1);
            console.log(`${nombre} fue dado de alta`);
            return array
        } else {
            console.log(`el auto no se ha podido dar de alta`);
        }
    }
}
