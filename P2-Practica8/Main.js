import hms from "./Reloj.js";
import { Xfactorial } from "./Factorial.js";
import { MedidasTriangulo,MedidasCuadrado,MedidasPentagono } from "./Poligono.js";

const factorial = Xfactorial();
const dato = hms();

console.log(`Area de triangulo: ${MedidasTriangulo.area()} y su perimentro es: ${MedidasTriangulo.P()}`);

console.log(`Area de Cuadrado: ${MedidasCuadrado.area()} y su perimentro es: ${MedidasCuadrado.P()}`);

console.log(`Area de Pentagono: ${MedidasPentagono.area()} y su perimentro es: ${MedidasPentagono.P()}`);