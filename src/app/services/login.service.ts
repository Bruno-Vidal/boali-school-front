import { Injectable } from '@angular/core';
import {Config} from "./config";
import {LoginRequest} from "./dto/login-request";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "./dto/login-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private config:Config,private http: HttpClient) { }

  login(request:LoginRequest): Observable<LoginResponse>{
      return this.http.post<LoginResponse>(this.config.SERVER_HOST+ 'login',JSON.stringify(request),this.config.BASE_HEADERS);
  }
}
