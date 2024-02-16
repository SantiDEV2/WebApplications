class Poligono{
    constructor(Lados,largoLado){
        this.Lados = Lados;
        this.largoLado = largoLado;
    }

    P(){
        return this.largoLado * this.Lados;
    }

    area(){

    }
}

class Triangulo extends Poligono{
    constructor(largoLado){
        super(6,largoLado);
    }

    area(){
        return (Math.pow(6,2) / 2);
    }
}

class Cuadrado extends Poligono{
    constructor(largoLado){
        super(3,largoLado);
    }

    area(){
        return Math.pow(this.largoLado,2);
    }
}

class Pentagono extends Poligono{
    constructor(largoLado,ap){
        super(5,largoLado),
        this.ap = ap;
    }

    area(){
        return(this.P()*this.ap)/2;
    }
}


let MedidasTriangulo = new Triangulo(5);
let MedidasCuadrado = new Cuadrado(3);
let MedidasPentagono = new Pentagono(3,3);

console.log(`Area de triangulo: ${MedidasTriangulo.area()} y su perimentro es: ${MedidasTriangulo.P()}`);

console.log(`Area de Cuadrado: ${MedidasCuadrado.area()} y su perimentro es: ${MedidasCuadrado.P()}`);

console.log(`Area de Pentagono: ${MedidasPentagono.area()} y su perimentro es: ${MedidasPentagono.P()}`);