import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from '../shared/models/company.interface';
import { environment } from '../../environments/environment';
import { ErrorHandler } from '../shared/utils/error.handler';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private http = inject(HttpClient)
  private errHandler = inject(ErrorHandler);

  getCompanyByCode(number: number): Observable<Company> {
    return this.http
    .get<Company>(`${environment.API_URL}/companies/number/${number}`)
    .pipe(
      catchError( (err) => this.errHandler.handlerError(err))
    );
  }

  

}
