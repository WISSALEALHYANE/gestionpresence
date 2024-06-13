import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://cedoc-api.ngcloud.ma/api'; 

  constructor(private http: HttpClient) { }

  getAssignedFormations(): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/getAffected');
  }

  validateParticipation(formationId: string, moduleId: string, doctorantId: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/participerModule/${formationId}/${moduleId}/${doctId}');
  }

  unvalidateParticipation(formationId: string, moduleId: string, doctorantId: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/unparticiperModule/${formationId}/${moduleId}/${doctId}');
  }

  validateParticipationByQr(formationId: string, moduleId: string, qr: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/participerModuleByQr/${formationId}/${moduleId}/${qr}');
  }

  unvalidateParticipationByQr(formationId: string, moduleId: string, qr: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/unparticiperModuleByQr/${formationId}/${moduleId}/${qr}');
  }

  validateParticipationByCin(formationId: string, moduleId: string, cin: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/participerModuleByCin/${formationId}/${moduleId}/${cin}');
  }

  unvalidateParticipationByCin(formationId: string, moduleId: string, cin: string): Observable<any> {
    return this.http.get('${this.baseUrl}/formations/unparticiperModuleByCin/${formationId}/${moduleId}/${cin}');
  }
}
