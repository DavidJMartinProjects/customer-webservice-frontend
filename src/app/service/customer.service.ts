import { CustomerPage } from './../model/customer-page.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = 'http://localhost:8080/customers';

  constructor(private httpClient: HttpClient) { }
  
  getCustomerPage(pageNumber: number, pageSize: string, sortKey:string, sortDirection:string): Observable<CustomerPage> {
    console.debug("pageSize: " + pageSize + ", pageNumber: " + pageNumber);    
    console.info("sortKey: " + sortKey + ", sortDirection: " + sortDirection);   
    var query = `?page=${pageNumber - 1}&size=${pageSize}&sortKey=${sortKey}&sortDirection=${sortDirection}`;

    return this.httpClient.get<CustomerPage>(this.baseUrl + query);
  }
  
}
