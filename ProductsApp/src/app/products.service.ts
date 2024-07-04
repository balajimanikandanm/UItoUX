import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  // Method to fetch top rated products
  getTopRatedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/topRated`)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  // Method to fetch special offers
  getSpecialOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/specialOffers`)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  // Method to fetch bestsellers
  getBestsellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/bestsellers`)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('API Error:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
