import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EuroDrawService {

  constructor(private http: HttpClient) { }

  API = "http://localhost:8080";

  public saveNewOrEditEuroDraw(addNewOrEditEuroDrawForm: any){
    return this.http.post(this.API + '/api/v1/euro-draw', addNewOrEditEuroDrawForm);
  }
}
