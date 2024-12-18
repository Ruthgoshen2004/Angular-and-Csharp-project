import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../model/meeting';
import { Cpa } from '../model/cpa';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private _http:HttpClient) { }
  getAllMeeting():Observable<Meeting[]>{
    return this._http.get<Meeting[]>('https://localhost:7001/api/Meet')
  }
  getMeetingById(id:number):Observable<Meeting>{
    return this._http.get<Meeting>(`https://localhost:7001/api/Meet/${id}`)
  }
  addMeeting(meeting:Meeting):Observable<any>{
    return this._http.post<any>('https://localhost:7001/api/Meet',meeting)
  }
  deleteMeeting(id:number):Observable<any>{
    return this._http.delete<any>(`https://localhost:7001/api/Meet/${id}`)
  }
  updateMeeting(id:number,meeting:Meeting):Observable<Meeting>{
    return this._http.put<Meeting>(`https://localhost:7001/api/Meet/${id}`,meeting)
  }
}
