import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { user } from 'src/app/Interfaces/Register';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private fb: FormBuilder,  private auth:AuthenticationService,private service:AdminService, private router:Router) {}

  ngOnInit(): void {

}
onAdd(){
  console.log('added');

  this.router.navigate(['admin/add'])
}
onAssigned(){
  this.router.navigate(['admin'])
}
}
