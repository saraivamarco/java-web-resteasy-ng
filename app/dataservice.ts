import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { CsvRow } from './csv-row';
import { Configuration } from './app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    private extatData;
    //private vars;

    public vars;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.ServerWithApiUrl + 'rs/csv/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getFiles(): Observable<CsvRow[]> {
        return this.http.get(this.actionUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getData (): Promise<CsvRow[]> {
        return this.http.get(this.actionUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }


    private extractData(res: Response) {
      let body = res.json();
      //debugger;
      this.extatData = body;
      return body || { };
    }

    getExtractData(){
      return this.extatData;
    }

    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}