import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private _http: HttpClient) { }

  getBeerList(): any {

        // this.word = name
        let myResponse = this._http.get('https://api.punkapi.com/v2/beers');
        console.log(myResponse)
        return myResponse;
    }
}
