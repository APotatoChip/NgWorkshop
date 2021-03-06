import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPost } from '../shared/interfaces/post';
const apiUrl=environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http:HttpClient) { 

  }

  loadPostList(limit?:number):Observable<IPost[]>{
      return this.http.get<IPost[]>(
        `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
        );
  }
}
