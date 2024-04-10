class Vehiculo{
    constructor(cantRuedas, marca, modelo, color, patente){
    this.cantRuedas = cantRuedas;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.patente = patente;
}}

var Vehiculo1 = new Vehiculo (4, 'Mercedes Benz', 'A200', 'Gris', 'AD256FZ')

console.log(Vehiculo1)