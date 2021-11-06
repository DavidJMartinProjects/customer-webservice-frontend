import { CustomerService } from './service/customer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerTableComponent } from './component/customer-table/customer-table.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent    
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
