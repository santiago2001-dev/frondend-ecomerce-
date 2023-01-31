export class userAdm{
    id: number
    names : string 
    email : string
    pass :string 
    typeUser :string 
    documento :string
    constructor(  
        id: number,
        names : string ,
        email : string,
        pass :string ,
        typeUser :string ,
        documento :string){
            this.id = id
            this.names = names 
            this.email = email 
            this.pass =pass 
            this.typeUser  = typeUser 
            this.documento = documento

    }
}



export class userIn{

    names : string 
    email : string
    pass :string 
    typeUser :string 
    document :string
    constructor(  
    
        names : string ,
        email : string,
        pass :string ,
        typeUser :string ,
        document :string){

            this.names = names 
            this.email = email 
            this.pass =pass 
            this.typeUser  = typeUser 
            this.document = document

    }
}

export class userCli{
    names : string 
    email : string
    pass :string 
   document :string
    constructor(  
        names : string ,
        email : string,
        pass :string ,
       
        document :string){
            this.names = names 
            this.email = email 
            this.pass =pass 
            this.document = document

    }
}