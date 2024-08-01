import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {

  handlerError(err: { message: any; status: any; }): Observable<never> {
    let errorMessage:string = 'An error occurred retriving data.';
    let errorStatus:string = '';
    if(err){
      errorMessage = `Error: ${err.message}`;
      errorStatus = err.status;
    }
    return throwError({message: errorMessage, code: errorStatus});
  }

}
