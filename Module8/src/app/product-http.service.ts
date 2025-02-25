import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../classes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  private _url:string="./assets/data/products.json";
  constructor(private _http: HttpClient) { }
  getProducts():Observable<IProduct[]>{ 
  return this._http.get<IProduct[]>(this._url)
  }
  getProductsHandleError()
  {
  return this._http.get<IProduct[]>(this._url)
  .pipe(retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
  
}
