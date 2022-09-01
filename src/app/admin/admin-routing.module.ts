import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../Guards/auth.guard';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignedprojectsComponent } from './assignedprojects/assignedprojects.component';



const routes: Routes = [
  {path: 'admin', canActivateChild:[AuthGuard], component: AdminDashboardComponent, children:[
    {path: 'add',  component:AddProjectComponent},
    {path: '',  component:AssignedprojectsComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
