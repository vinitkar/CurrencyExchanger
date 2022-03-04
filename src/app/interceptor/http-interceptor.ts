import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class currencyInterceptor implements HttpInterceptor {
    API_KEY = "f54c54d6f3907be7f3cc3851b75c429f";
    constructor() {}
   
intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const cloneReq = request.clone({
        params: request.params.set('access_key', this.API_KEY)
    })
    return next.handle(cloneReq)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let message = '';
                if (error.error instanceof ErrorEvent) {
                    // handle client-side error
                    message = `Error: ${error.error.message}`;
                } else {
                    // handle server-side error
                    message = `Error Status: ${error.status}\nMessage: ${error.message}`;
                }
                console.log(message);
                return throwError(message);
            })
        )
 }

}