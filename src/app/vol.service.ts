import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { environment as env} from "../environments/environment"
import {HttpClient} from "@angular/common/http"
import { Vol } from './models/vol';
@Injectable({
  providedIn: 'root'
})
export class VolService {

  private volUrl = env.apiUrl + "vols";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Vol[]> {
    return this.http.get<Vol[]>(this.volUrl);
  }
}
