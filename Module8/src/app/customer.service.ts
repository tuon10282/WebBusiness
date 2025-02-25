import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../../classes/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url:string="./assets/data/customers.json";
  constructor(private _http: HttpClient) { }
  getCustomers():Observable<ICustomer[]>{ 
  return this._http.get<ICustomer[]>(this._url)
  }  
}
