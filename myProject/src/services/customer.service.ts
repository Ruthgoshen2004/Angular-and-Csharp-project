import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }
  getAllCustomer():Observable<Customer[]>{
    return this._http.get<Customer[]>('https://localhost:7001/api/Customer')
  }
  getCustomerById(id:number):Observable<Customer>{
    return this._http.get<Customer>(`https://localhost:7001/api/Customer/${id}`)
  }
 
  deleteCustomer(id:number):Observable<any>{
    return this._http.delete<any>(`https://localhost:7001/api/Customer/${id}`)
  }
  updateCustomer(id:number,customer:Customer):Observable<Customer>{
    
    return this._http.put<Customer>(`https://localhost:7001/api/Customer/${id}`,customer)
    
  }
  addCustomer(customer:Customer):Observable<any>{
    console.log(customer)
    return this._http.post<any>('https://localhost:7001/api/Customer',customer)
  }
}
