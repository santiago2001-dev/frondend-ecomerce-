export  class infoPago {
        docType: string
        document: number
        name: string
        lastName: string
        email: string
        indCountry: string
        phone: string
        country: string
        city: string
        address: string
        currency: string
        description: string
        value: string
        methodConfirmation:string
        
        constructor(  
            docType: string,
            document: number,
            name: string,
            lastName: string,
            email: string,
            indCountry: string,
            phone: string,
            country: string,
            city: string,
            address: string,
            currency: string,
            description: string,
            value: string,
            methodConfirmation:string,
            ){
                this.docType= docType
                this.document= document
                this.name= name
                this.lastName=  lastName
                this.email= email
                this.indCountry= indCountry
                this.phone= phone
                this.country= country
                this.city= city
                this.address= address
                this.currency= currency
                this.description= description
                this.value= value
                this.methodConfirmation= methodConfirmation
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

        
        
    
    
    
