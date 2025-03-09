import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fashion} from '../classes/Fashion';

@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // Get all fashions
  getFashions(): Observable<Fashion[]> {
    return this.http.get<Fashion[]>(`${this.apiUrl}/fashions`);
  }

  // Get fashion by ID
  getFashionById(id: string): Observable<Fashion> {
    return this.http.get<Fashion>(`${this.apiUrl}/fashions/${id}`);
  }

  // Get fashions by style
  getFashionsByStyle(style: string): Observable<Fashion[]> {
    return this.http.get<Fashion[]>(`${this.apiUrl}/fashions/style/${style}`);
  }

  // Add a new fashion
  addFashion(fashion: Fashion): Observable<Fashion> {
    return this.http.post<Fashion>(`${this.apiUrl}/fashions`, fashion);
  }

  // Update a fashion
  updateFashion(fashion: Fashion): Observable<Fashion> {
    return this.http.put<Fashion>(`${this.apiUrl}/fashions`, fashion);
  }

  // Delete a fashion
  deleteFashion(id: string): Observable<Fashion> {
    return this.http.delete<Fashion>(`${this.apiUrl}/fashions/${id}`);
  }
}
