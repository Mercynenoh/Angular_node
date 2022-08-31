import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Interfaces/project';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
user:Project[]=[]
  constructor() { }

  ngOnInit(): void {
    
  }

}
