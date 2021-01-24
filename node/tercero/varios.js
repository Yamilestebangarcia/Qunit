const contrario=(parametro)=>{
    return !parametro;
}
const saludar=(nombre)=>{
    return `hola ${nombre}`;
}
const objeto = { nombre: "yamil", apellido: "esteban", sexo:"varon" };

const varios={saludar,contrario,objeto}

module.exports= varios;