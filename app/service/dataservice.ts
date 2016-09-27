import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { CsvRow } from './csv-row';
import { Configuration } from './app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private actionUrl2: string;
    private headers: Headers;

    private extatData;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.ServerWithApiUrl + 'rs/csv/';
        this.actionUrl2= configuration.ServerWithApiUrl + 'rs/csv/vheaders/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    /** Preferred way to retrieve data - with Observable */
    getFiles(): Observable<CsvRow[]> {
        return this.http.get(this.actionUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getVarHeaders(): Observable<String[]> {
        return this.http.get(this.actionUrl2)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    /** Optional way to retrieve data - with Promise*/
    getData (): Promise<CsvRow[]> {
        return this.http.get(this.actionUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }


    private extractData(res: Response) {
      let body = res.json();
      //debugger;
      return body || { };
    }

    private handleError (error: any) {
      // Dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}