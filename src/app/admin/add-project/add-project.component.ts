import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AdminService } from 'src/app/Services/admin.service';
import { user } from 'src/app/Interfaces/Register';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  user$:Observable<user[]>=new Observable()
  addForms!: FormGroup;

  constructor(private fb: FormBuilder,  private auth:AuthenticationService,private service:AdminService, private router:Router) {}

  ngOnInit(): void {
   this.onget()

    this.addForms = this.fb.group({
      name:[null,[Validators.required]],
      description:[null,[Validators.required]],
      enddate:[null,[Validators.required]],
      email:[null,[Validators.required]],
    });
}
onAdd(){
this.service.addProject(this.addForms.value).subscribe(response=>{
console.log(response);
this.router.navigate(['admin'])
})
}
onget(){
 this.user$= this.auth.getUsers()
}
}
