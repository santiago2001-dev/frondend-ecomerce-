import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/services/productos.service'
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {producto, productoinsert} from 'src/app/models/productos'
import { FormGroup ,Validators,FormBuilder} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
  productForm : FormGroup
  imagenes : []|any = []

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private prudctServ : ProductosService,
    private sanintezer : DomSanitizer, //libreria para pasar a base 64 


  ) {
    this.productForm = this.fb.group({
      titulo : ['',Validators.required],
      precio : ['',Validators.required],
      tipo : ['',Validators.required],
      sinopsis : ['',Validators.required],
      genero : ['',Validators.required],
      imagenUno : ['',Validators.required],
      imagenDos : ['',Validators.required],
      imagenTres :['',Validators.required],

    })
   }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.productForm.invalid){
      console.log(this.productForm.invalid)

      swal.fire({
        icon: 'error',
        title: this.productForm
      
      })
    }else{
       const producto : productoinsert = {
        titulo : this.productForm.get('titulo')?.value,
        precio : this.productForm.get('precio')?.value,
        tipo : this.productForm.get('tipo')?.value,
        imagenUno : this.imagenes[2],
        imagenDos :this.imagenes[1],
        imagenTres : this.imagenes[0],
        sinopsis : this.productForm.get('sinopsis')?.value,
        genero : this.productForm.get('genero')?.value
        
      }
      this.prudctServ.insertProduct(producto).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/producto'])
        
        

        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
     
  
        
        }

        )
    }
    
  }





  capturarFile($event: any): any{
    const archivoCapturado  = $event.target.files[0]
   //  this.archivos.push(archivoCapturado)
    this.extrarBase64(archivoCapturado).then((imagen: any)=>{
      this.imagenes.unshift( imagen.base)
      console.log(this.imagenes);
  
    })
   
  
  }
  
  
  extrarBase64 = async ($event: any) => new Promise((resolve, reject) =>  {
   
    const usafeImg = window.URL.createObjectURL($event);
    const image = this.sanintezer.bypassSecurityTrustUrl(usafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () =>{
      resolve({
        base : reader.result
      });
    };
    reader.onerror = error =>{
      resolve({
          base: null
      });
    };
    
  
  
  }
  )
}
