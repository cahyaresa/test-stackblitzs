import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  serverUrl: any = 'https://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
   ) { }

   get(url){
     return this.http.get(this.serverUrl+url);
   }

   post(url, data){
     return this.http.post(this.serverUrl+url, data);
   }

   put(url, data){
     return this.http.put(this.serverUrl+url, data);
   }
}
