import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignedprojectsComponent } from './assignedprojects/assignedprojects.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProjectComponent,
    AssignedprojectsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
