import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  userData: any =[];
  
  form = new FormGroup({
    id: new FormControl(''),
    avatar: new FormControl(''),
    first_name:  new FormControl(''),
    last_name: new FormControl('')
  })

  getUser(pageNumber : string){
    return this.http.get(this.url + `?page=${pageNumber}`)
  }
  deleteUser(id: any){
    return this.http.delete(this.url+ `/${id}`)
  }
  updateUser(user: any){
    return this.http.put(this.url + `/${user.id}`, user );
  }
  viewUser(id: any){
    return this.http.get(this.url+ `/${id}`)
  }
}
