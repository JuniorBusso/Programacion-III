async function obtenerDatos(){
    await new promise (resolve =>
        setTimeout(resolve, 2000));

        return{
            nombre: "Juan Perez",
            edad: 30,
            ciudad: "Las Varillas"
        };
}
async function mostrarDatos(){
    const datos = await obtenerDatos();
    console.log(`Nombre: ${datos.nombre}`)
    console.log(`Edad: ${datos.edad}`)
    console.log(`Ciudad: ${datos.ciudad}`)
}