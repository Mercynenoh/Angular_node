import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Interfaces/Register';
import { loginuser } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl:string ="http://localhost:5000/user/"
  private httpOptions: any;

  constructor( private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe:'body'
    }
  }


  registerUser(data:user){
    return this.http.post<any>(this.baseUrl+'signup/', data)
  }

  loginUser(data:loginuser): Observable<any>{
    return this.http.post<any>(this.baseUrl+'login/',data)
  }
  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl+'all/')
  }
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  checkstatus(){
    return !!localStorage.getItem('role')
 
  }
}
