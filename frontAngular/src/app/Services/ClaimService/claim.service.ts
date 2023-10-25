import { Injectable } from '@angular/core';
import {Claim} from '../../models/Claim';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  claims:Claim[]=[];
  url=environment.baseUrl+'claims';
  constructor(private httpClient:HttpClient) { }

  /********************************Get Claims************************************/
  getAllClaims(): Observable<Claim[]>{

    return this.httpClient.get<Claim[]>(this.url+'/getAll')
  }

  /********************************Add Claim************************************/
  saveClaim(claim: Claim):Observable<Claim>{
    return this.httpClient.post<Claim>(this.url +'/addClaim', claim);
  }

  /********************************Delete Claim************************************/
  deleteClaim(id:number):Observable<any>{
    return this.httpClient.delete(`${this.url+"/deleteClaim"}/${id}`, {responseType: 'text'});
  }

  /********************************Update Claim************************************/
  updateClaim(id:number, d:any):Observable<any>{
    return this.httpClient.put<Claim>(this.url+"/update-contrat/"+id, d);
  }

}