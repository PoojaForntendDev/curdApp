import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Request Interceptors");

  //token define to http
  const token = "Token123456";
  req = req.clone({ "headers": req.headers.set("auth-Token", token) })

  //error handle
  return next(req).pipe(catchError((errorResponce: HttpErrorResponse) => {
    if (errorResponce.status == 401) {
      return throwError("credenstial error in login name and password")

    }
    if (errorResponce.status == 500) {
      return throwError("we are unable to process your request,please try latter")

    }
    return throwError("Error Message")
  }));
};
