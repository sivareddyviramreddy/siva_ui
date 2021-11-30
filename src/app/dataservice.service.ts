import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  datamethod(){
    return[{"id":1,"name":"siva1","course":"HTML"},
    {"id":2,"name":"siva2","course":"CSS"},
    {"id":3,"name":"siva3","course":"JAVASCRIPT"},
    {"id":4,"name":"siva4","course":"ANGULAR"}
  ]
  }
}
