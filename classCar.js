"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
var registro = [];
var data = fs.readFileSync("./listaAuto.json", "utf8");
var cars = JSON.parse(data);
for (var i = 0; i < cars.length; i++) {
    registro.push(cars[i]);
}
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.todo = function (registro) {
        console.log("autos: ".concat(registro));
    };
    RegistroAutomotor.prototype.consultar = function (nombre, array) {
        var autoEncntrado = array.find(function (auto) { return auto.nombre === nombre; });
        if (autoEncntrado) {
            console.log(nombre, 'el auto esta registrado', autoEncntrado);
            return autoEncntrado;
        }
        else {
            console.log(nombre, 'no esta registrado, verifique los datos.');
        }
    };
    RegistroAutomotor.prototype.borrar = function (nombre, array) {
        var autoEncntrado = array.findIndex(function (auto) { return auto.nombre == nombre; });
        if (autoEncntrado >= 0) {
            array.splice(autoEncntrado, 1);
            console.log("auto eliminado");
            console.log(array);
            return array;
        }
        else {
            console.log('auto ', nombre, 'no ha sido eliminado');
        }
    };
    RegistroAutomotor.prototype.actualizar = function (nombre, array, dato) {
        var autoActualizar = this.consultar(nombre, array);
        if (autoActualizar) {
            autoActualizar.nombre = dato;
            console.log("el auto ".concat(nombre, " ha sido actualizado y se llama ").concat(dato));
        }
    };
    RegistroAutomotor.prototype.darDeAlta = function (nombre, array) {
        var verific = array.findIndex(function (auto) { return auto.nombre == nombre; });
        if (verific >= 0) {
            array.splice(verific, 1);
            console.log("".concat(nombre, " fue dado de alta"));
            return array;
        }
        else {
            console.log("el auto no se ha podido dar de alta");
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var regist = new RegistroAutomotor;
regist.todo;
