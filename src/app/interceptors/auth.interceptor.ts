import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Cloning the request and setting the headers
    const clonedReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });

    return next.handle(clonedReq).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Network error
          errorMessage = `Network Error: ${error.error.message}`;
        } else {
          // Server or client error
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request';
              break;
            case 401:
              errorMessage = 'Unauthorized';
              // Optionally, redirect to login or refresh token
              break;
            case 403:
              errorMessage = 'Forbidden';
              // Optionally, redirect to a forbidden page or show a modal
              break;
            case 404:
              errorMessage = 'Not Found';
              break;
            case 500:
              errorMessage = 'Internal Server Error';
              break;
            default:
              errorMessage = `Unknown Server Error: ${error.message}`;
          }
        }

        console.error('Error occurred:', errorMessage);
        return new Observable<HttpEvent<any>>((observer) => {
          observer.error(errorMessage);
        });
      })
    );
  }
}
