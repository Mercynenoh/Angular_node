import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/Interfaces/project';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-assignedprojects',
  templateUrl: './assignedprojects.component.html',
  styleUrls: ['./assignedprojects.component.css']
})
export class AssignedprojectsComponent implements OnInit {
  project:Project[]=[]
  constructor(private service:AdminService ) { }

  ngOnInit(): void {
    this.showall()
  }
  deleteproject(ProjectsId:string){
    this.service.deleteproject(ProjectsId).subscribe(result=>{
    this.showall()
    })
  }
  showall(){
    this.service.showProject().subscribe(response=>{
      this.project=response

    })
  }


}
