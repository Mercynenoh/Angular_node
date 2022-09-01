import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('form') form!:NgForm
  constructor( private router:Router, private service:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.form.valid){
    this.service.loginUser(this.form.value).subscribe(response=>{
      localStorage.setItem('token', response.token)
      localStorage.setItem('email', response.user.email)
      console.log(response);
      if(response.user.role==='admin'){
      this.router.navigate(['admin'])

      }else{
        this.router.navigate(['user'])
      }
    })
  }else{
    alert('invalid details')
  }
    }
  }


