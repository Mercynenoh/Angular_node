import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router, public auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  onclick(){
   this.router.navigate(['login'])
  }
  onLogout(){
    localStorage.clear()
    this.router.navigate([''])
  }

}
