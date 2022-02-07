class Usuario{

    constructor(name,apellido,libros,mascotas) {
        this.name=name;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName()  {
         return `${this.name}${this.apellido}`;
    }
    
    getCountMascotas() {
        return `${this.mascotas}${2}`;
    }
    getBooksNames() {
        return `${this.libros}`;
    }
}

let pruebaDeUsuario = new Usuario("String","String",[{nombre: 'Nada que Perder 1', autor: 'Edir Macedo'}, {nombre: 'Nada que perder 2', autor: 'Edir Macedo'}] , ["perro","perro"],"2");
console.log(pruebaDeUsuario);

const mascotas = ["pero","perro"];
console.log(mascotas.length);