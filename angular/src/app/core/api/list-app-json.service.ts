import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListAppService {
    private apiUrl = 'http://5a5d7789d6221a0012962d5c.mockapi.io/v1/apps';
    constructor(private _http: Http) { }
    getList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) =>
            response.json());
    }
}

