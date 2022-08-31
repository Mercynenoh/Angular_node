import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regSuccess = false

  addForms!: FormGroup;

  constructor(private fb: FormBuilder,  private auth:AuthenticationService, private router:Router) {}

  ngOnInit(): void {


    this.addForms = this.fb.group({
      username:[null,[Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,this.checkPassword]],
    });
  }


  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null


  }

  addUser() {
    if(this.addForms.valid){
    this.auth.registerUser(this.addForms.value).subscribe(response=>{
      this.regSuccess = true
      if (this.regSuccess){
       this.router.navigate(['login'])
      }
    })
  }else{
    alert('details already exist')
  }
}



  }
