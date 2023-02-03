export class producto{
    codigo_prod:number
    titulo :string 
    precio :number
    tipo : string 
    sinopsis : string
    fecha :string
    imagenUno : string
    imagenDos : string
    imagenTres : string 
    constructor( 
        codigo_prod:number,
        titulo :string,
        precio :number,
        tipo : string ,
        fecha :string,
        sinopsis : string,
         imagenUno : string,
        imagenDos : string,
        imagenTres : string, ){
            this.codigo_prod = codigo_prod
            this.titulo = titulo,
            this.precio = precio,
            this.tipo = tipo ,
            this.fecha = fecha
            this.sinopsis = sinopsis
            this.imagenUno = imagenUno,
            this.imagenDos = imagenDos,
            this.imagenTres = imagenTres



    }
    
}

export class productoUp{
    titulo :string 
    precio :number
    tipo : string 
    sinopsis : string
   
    constructor( 
        titulo :string,
        precio :number,
        tipo : string ,
        sinopsis : string,
         ){
            this.titulo = titulo,
            this.precio = precio,
            this.tipo = tipo ,
            this.sinopsis = sinopsis
        



    }
    
}


export class productoinsert{
    titulo :string 
    precio :number
    tipo : string 
    sinopsis : string
    imagenUno : string
    imagenDos : string
    imagenTres : string 
    constructor( 
        titulo :string,
        precio :number,
        tipo : string ,
        sinopsis : string,
         imagenUno : string,
        imagenDos : string,
        imagenTres : string, ){
            this.titulo = titulo,
            this.precio = precio,
            this.tipo = tipo ,
           this.sinopsis = sinopsis
            this.imagenUno = imagenUno,
            this.imagenDos = imagenDos,
            this.imagenTres = imagenTres



    }
    
}
export class busqueda {
    busqueda : string 
    constructor( busqueda : string){
        this.busqueda = busqueda
    }
}