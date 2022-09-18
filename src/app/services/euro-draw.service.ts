import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EuroDrawService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080/api/v1/euro-draws'

  public addNewEuroDraw(newEuroDrawData: any){
    return this.http.post(this.API, newEuroDrawData)
  }

}
