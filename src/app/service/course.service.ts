import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl: string = "http://localhost:3000/";
  baseUrlServerData: string = "http://localhost:3002/";

  httpHeader = new HttpHeaders({
    "content-type": "application/json",

  })

  constructor(private httpClient: HttpClient) {

  }

  getDataFromServer(endPoint: any) {
    console.log("Get Data From server!")
    var url = this.baseUrl + endPoint;
    return this.httpClient.get(url, { headers: this.httpHeader })
  }

  postDataToServer(endPoint: any, data: any) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.post(url, data, { headers: this.httpHeader })

  }

  putDataToServer(endPoint: any, data: any) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.put(url, data, { headers: this.httpHeader })

  }

  deleteDataFromServer(endPoint: any) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.delete(url, { headers: this.httpHeader })

  }
  getDataDropDownList(endPoint: any) {
    var urlServer = this.baseUrlServerData + endPoint;
    return this.httpClient.get(urlServer, { headers: this.httpHeader })

  }

  // handleHttpError(errorResponce: HttpErrorResponse) {

  //   if (errorResponce.error instanceof ErrorEvent) {
  //     console.log("Client side Error")
  //   } else {
  //     console.log("Server side Error")
  //   }
  //   var errorMessage = "We are unable to process your Request, Please try later."
  //   if (errorResponce.status == 401) {
  //     return throwError("Invalid Credensitals, Please Check in your login and password.")
  //   }

  //   if (errorResponce.status == 500) {
  //     return throwError("Error Message")
  //   }
  //   return throwError(errorMessage)

  // }
}
