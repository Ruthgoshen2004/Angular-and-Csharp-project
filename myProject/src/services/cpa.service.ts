import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cpa } from '../model/cpa';

@Injectable({
  providedIn: 'root'
})
export class CpaService {

  constructor(private _http :HttpClient) {}

  getAllCpa():Observable<Cpa[]>{
    return this._http.get<Cpa[]>('https://localhost:7001/api/CPA')
  }
  getCpaById(id:number):Observable<Cpa>{
    return this._http.get<Cpa>(`https://localhost:7001/api/CPA/${id}`)
  }
  addCpa(cpa:Cpa):Observable<any>{
    return this._http.post<any>('https://localhost:7001/api/CPA',cpa)
  }
  deleteCpa(id:number):Observable<any>{
    return this._http.delete<any>(`https://localhost:7001/api/CPA/${id}`)
  }
  updateCpa(id:number,cpa:Cpa):Observable<Cpa>{
    return this._http.put<Cpa>(`https://localhost:7001/api/CPA/${id}`,cpa)
  }

}
