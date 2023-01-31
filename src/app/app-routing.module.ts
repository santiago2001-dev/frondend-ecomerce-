import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { RolesGuard } from './guards/roles.guard';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutngModule } from './pages/pages-routng.module';

const routes: Routes = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component: NopageFoundComponent},

];

@NgModule({
  imports: [
   
    RouterModule.forRoot(routes),
    PagesRoutngModule,
    AuthRoutingModule

  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
