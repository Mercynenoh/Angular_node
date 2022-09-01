import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Interfaces/project';
import { user } from 'src/app/Interfaces/Register';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
project:Project[]=[]
// user:user[]=[]
  constructor( private service:UserService, private services:AuthenticationService) { }

  ngOnInit(): void {
    const email = localStorage.getItem("email")?? ""
    this.getProject(email);
  }

getProject(email:string){
  this.service.showmyProject(email).subscribe(response=>{
    this.project=response

   })
}
update(){
  
}
}
