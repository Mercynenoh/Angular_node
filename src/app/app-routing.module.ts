import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'admin', loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:'user', loadChildren:()=> import('./user/user.module').then(mod=>mod.UserModule)},
  {path:'auth', loadChildren:()=> import('.//auth/auth.module').then(mod=>mod.AuthModule)},
    { path: '**', component: NotfoundComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
