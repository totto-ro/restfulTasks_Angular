import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor( private _http:HttpClient ) {
  }


  getTasks(){
    console.log( "Getting tasks from our localhost:7077" );
      return this._http.get( 'http://localhost:7077/' );
  }

  oneTask( id:string ){
    return this._http.get('http://localhost:7077/' + location.pathname.split('/').slice(-1)[0])
  }

}
