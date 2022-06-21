import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from '../models/api-model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  request(
    requestType: string,
    requestUrl: string,
    requestBody: any
  ): Observable<ApiModel> | any {
    if (requestType === 'get') {
      return this.http.get<ApiModel>(this.baseUrl + requestUrl);
    }
    if (requestType === 'post') {
      return this.http.post<ApiModel>(this.baseUrl + requestUrl, requestBody);
    }
    if (requestType === 'put') {
      return this.http.put<ApiModel>(this.baseUrl + requestUrl, requestBody);
    }
    if (requestType === 'patch') {
      return this.http.patch<ApiModel>(this.baseUrl + requestUrl, requestBody);
    }
    if (requestType === 'delete') {
      return this.http.delete<ApiModel>(this.baseUrl + requestUrl);
    }
  }
}
