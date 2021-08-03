 import { Injectable } from '@angular/core';
//import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';




const apiUrl=environment.apiUrl;

@Injectable()
export class UserService {

  currentUser:IUser | any;

  get isLogged():boolean{
    return !!this.currentUser;
  }
  
  // isLogged=false;

  constructor(private http:HttpClient) { 
      // this.isLogged=this.storage.getItem('isLogged');
  }

  login(data?:any):Observable<any>{
    return this.http.post(`${apiUrl}/users/login`,data,{withCredentials:true})
    .pipe(
      tap((user:any)=>
        {
        this.currentUser=user;
        })
        
    );
    // this.isLogged=true;
    // this.storage.setItem('isLogged',true);
    // return of(data).pipe(delay(3000));
  }

  register(data:any):Observable<any>{
    return this.http.post(`${apiUrl}/users/register`,data,{withCredentials:true}).pipe(
      
      tap((user:any)=>{
        console.log(user);
        
        this.currentUser=user;
      })
    );
    
  }

  logout():Observable<any>{
    return this.http.post(`${apiUrl}/users/login`,{},{withCredentials:true});
    // this.isLogged=false;
    // this.storage.setItem('isLogged',false);
    // return of(null).pipe(delay(3000));
  }
}
