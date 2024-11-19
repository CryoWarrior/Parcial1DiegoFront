import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/contrato/contrato.module';

@Injectable({
  providedIn: 'root'
})
export class ContratoServiceService {

  constructor(private http: HttpClient) { } 

  private url = "http://localhost:8080/api/contratos"

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.url);
  }

  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.url, contrato);
  }

}
