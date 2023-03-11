 export class infoPago {
    
        bank: string
        description :string
        value: string
        tax: string
        tax_base: string
        currency: string
        type_person: string
        doc_type: string
        doc_number: string
        name: string
        last_name: string
        email: string
        country: string
        cell_phone: string
        ip:string 
        url_response: string
        url_confirmation: string
        metodoconfirmacion : string
    constructor(
        bank: string,
        description :string,
        value: string,
        tax: string,
        tax_base: string,
        currency: string,
        type_person: string,
        doc_type: string,
        doc_number: string,
        name: string,
        last_name: string,
        email: string,
        country: string,
        cell_phone: string,
        ip:string, 
        url_response: string,
        url_confirmation: string,
        metodoconfirmacion : string
    ){
            this.bank = bank
            this.description = description
            this.value = value
            this.tax = tax
            this.tax_base = tax_base
            this.currency = currency
            this.country = currency
            this.type_person = type_person
            this.doc_type = doc_type
            this.doc_number = doc_number
            this.name = name
            this.last_name = last_name
            this.email = email
            this.country = country
            this.cell_phone= cell_phone
            this.ip= ip
            this.url_response= url_response
            this.url_confirmation=  url_confirmation
            this.metodoconfirmacion = metodoconfirmacion

    }
}

export class mdedidas {
    medidaUno :number
    medidaDos: number
    medidaTres: number
    medidaCuatro: number
    constructor(
        medidaUno :number,
        medidaDos: number,
        medidaTres: number,
        medidaCuatro: number
    ){
     this.medidaUno =medidaUno
     this.medidaDos= medidaDos
      this.medidaTres=medidaTres
        this.medidaCuatro=medidaCuatro           
     }

}


export class mdedidasSup {
    medidaUno :number
    medidaDos: number
    medidaTres: number
    medidaCuatro: number
    medidaCinco: number
    constructor(
        medidaUno :number,
        medidaDos: number,
        medidaTres: number,
        medidaCuatro: number,
        medidaCinco: number
    ){
     this.medidaUno =medidaUno
     this.medidaDos= medidaDos
      this.medidaTres=medidaTres
     this.medidaCuatro=medidaCuatro    
     this.medidaCinco = medidaCinco


     }

}

export class direccion{
 direccion  : string 
 constructor(direccion: string){
    this.direccion = direccion
 }
}



