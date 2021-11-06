import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerService } from './../../service/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  
  customers: Customer[] = [];

  totalElements: any;
  totalPages: any;
  pageNumber: number = 1;
  tableSizes = [5, 10, 15, 20];
  tableSize: any = this.tableSizes[0];

  constructor(private customerService: CustomerService, private paginate: NgxPaginationModule) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomerPage(this.pageNumber, this.tableSize, this.sortKey, this.sortDirection).subscribe(
      data => {        
        this.customers = data.customers;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
      }
    )
  }

  onTableDataChange(event: any){
    this.pageNumber = event;
    this.fetchCustomers();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.fetchCustomers();
  } 

  pageChanged(event: any): void {
    this.pageNumber = event;
    this.fetchCustomers();
  }

  sortKey:string = 'id';
  sortDirection:string = 'ASC';
  reverse:boolean = false;

  sort(key:string) {    
    this.sortKey = key;
    this.reverse = !this.reverse;
    if(this.reverse) {
      this.sortDirection = 'DESC'
    } else {
      this.sortDirection = 'ASC'
    }
    this.fetchCustomers();
  }

}
