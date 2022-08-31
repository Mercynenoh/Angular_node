import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string ="http://localhost:5000/project/"
  private httpOptions: any;

  constructor( private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe:'body'
    }
  }
  addProject(data:Project){
    return this.http.post<any>(this.baseUrl+'', data)
  }
  showProject():Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl+'get/')
  }
}
