import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ResponseService {

  constructor(private _http: Http) { }

  getResponses(): Observable<String[]> {
    return this._http.get('assets/server-responses.json')
            .map((response: Response) => <String[]>response.json().ItemModList);
  }

  // private handleError(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
}
