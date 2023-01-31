import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/services/productos.service'
import swal from 'sweetalert2';
import {productoUp} from 'src/app/models/productos';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router ,RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
productForm : FormGroup
Id : String |null;
  constructor(
    private router : Router,
    private fb : FormBuilder,
    private productServ : ProductosService,
    private aRouter : ActivatedRoute

  ) {
    this.productForm = this.fb.group({
      titulo :['',Validators.required],
      precio : ['',Validators.required],
      tipo : ['',Validators.required],
      sinopsis :['',Validators.required],
    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.getValues()
  }

  updateProduct(){
    if(this.productForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    }else{
      const producto :productoUp={
        titulo : this.productForm.get('titulo')?.value,
        precio : this.productForm.get('precio')?.value,
        tipo : this.productForm.get('tipo')?.value,
        sinopsis : this.productForm.get('sinopsis')?.value
      }
      this.productServ.updateProduct(this.Id,producto).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'producto actualizado de forma correcta',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/dashboard/productos'])
        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        }
      )

    }
  }

  getValues(){
    if(this.Id !== null){
      this.productServ.getProductByid(this.Id).subscribe(
        data=>{
          this.productForm.patchValue({
            titulo: data[0].titulo,
            precio :data[0].precio,
            tipo :data[0].tipo,
            sinopsis : data[0].sinopsis
          })
        }
      )
    }
  }
}
