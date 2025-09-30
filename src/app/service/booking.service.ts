import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = "http://localhost:3000/";
  httpHeaders = new HttpHeaders({
    "content-type": "application/json"
  });



  getServerData(endPoint: string) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.get(url, { headers: this.httpHeaders })
  }

  postDataToServer(endPoint: string, data: any) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.post(url, data, { headers: this.httpHeaders })
  }

  putDataToServer(endPoint: string, data: any) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.put(url, data, { headers: this.httpHeaders })

  }

  deleteDataFromServer(endPoint: string) {
    var url = this.baseUrl + endPoint;
    return this.httpClient.delete(url, { headers: this.httpHeaders })

  }
}
