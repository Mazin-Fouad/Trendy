import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let clonedReq = req;

    // Only set the header for non-file upload requests
    if (!req.headers.has('Content-Type')) {
      clonedReq = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    return next.handle(clonedReq).pipe(
      // Only retry for GET requests
      req.method !== 'GET' ? retry(2) : (operator) => operator,
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Network Error: ${error.error.message}`;
        } else {
          errorMessage = this.handleErrorStatus(error.status);

          // Potential user feedback mechanisms
          if (error.status === 401) {
            // redirectToLogin(); or showLoginModal();
          } else if (error.status === 403) {
            // redirectToForbiddenPage(); or showForbiddenModal();
          }
        }

        console.error('Error occurred:', errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  private handleErrorStatus(status: number): string {
    switch (status) {
      case 400:
        return 'Bad Request';
      case 401:
        return 'Unauthorized';
      case 403:
        return 'Forbidden';
      case 404:
        return 'Not Found';
      case 500:
        return 'Internal Server Error';
      default:
        return `Unknown Server Error: ${status}`;
    }
  }
}
