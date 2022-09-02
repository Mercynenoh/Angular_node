import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string ="http://localhost:5000/project/"
  private httpOptions: any;

  constructor( private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe:'body'
    }
  }
  showmyProject(email:string):Observable<Project[]>{
    return this.http.get<Project[]>(`${this.baseUrl}${email}`)
  }
  updateproject(ProjectsId:string){
    return this.http.put<any>(`${this.baseUrl}${ProjectsId}`,ProjectsId)
  }

}
