import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private _http: HttpClient) { }
  APIUrl = 'https://api.punkapi.com/v2/beers';

  getBeerList(): any {

        // this.word = name
        let myResponse = this._http.get(`${this.APIUrl}?page=1&per_page=8`);
        console.log(myResponse)
        return myResponse;
    }
}
