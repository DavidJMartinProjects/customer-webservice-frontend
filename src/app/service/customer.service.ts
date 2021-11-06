import { CustomerPage } from './../model/customer-page.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomerPage(pageNumber: number, pageSize: string): Observable<CustomerPage> {
    console.debug("pageSize: " + pageSize + ", pageNumber: " + pageNumber);
    var baseUrl = `http://localhost:8080/customers?page=${pageNumber - 1}&size=${pageSize}`
    return this.httpClient.get<CustomerPage>(baseUrl).pipe();
  }
  
}
