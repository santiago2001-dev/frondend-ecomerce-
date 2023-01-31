export class venta {
    documento_user: string
        nombre_producto: string
        fecha: string
        total: number
        direccion_dom: string
        email: string
        cel: string
        medidaUno: string
        medidaDos: string
        medidaTres: string
        medidaCuatro: string
        medidaCinco: string
        nombres_clien: string
        tipoProduct: string
        id : number

        constructor(
        documento_user: string,
        nombre_producto: string,
        fecha: string,
        total: number,
        direccion_dom: string,
        email: string,
        cel: string,
        medidaUno: string,
        medidaDos: string,
        medidaTres: string,
        medidaCuatro: string,
        medidaCinco: string,
        nombres_clien: string,
        tipoProduct: string,
        id : number
        ){

        this.documento_user=documento_user,
        this.nombre_producto=nombre_producto,
        this.fecha=fecha,
        this.total=total,
        this.direccion_dom=direccion_dom,
        this.email=email,
        this.cel=cel,
        this.medidaUno=medidaUno,
        this.medidaDos=medidaDos,
        this.medidaTres=medidaTres,
        this.medidaCuatro=medidaCuatro,
        this.medidaCinco=  medidaCinco
        this.nombres_clien= nombres_clien
        this.tipoProduct= tipoProduct
        this.id = id
        }
}