import { Component, OnInit } from '@angular/core';
import { DataService } from './dataservice';
import { CsvRow } from './csv-row';
import { Configuration } from './app.constants';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  providers: [DataService, Configuration]
})
export class AppComponent implements OnInit {
  sendFileUrl : string;
  data : CsvRow[];
  cols: any[];
  vheaders : String[];
  errorMessage : 'Observable';

    constructor(private dataService: DataService, private configuration: Configuration) { 
      this.dataService=dataService;
      this.sendFileUrl = configuration.ServerWithApiUrl + 'upload';
      this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'vars', header: 'Vars'},
            {field: 'decision', header: 'Decision'}
        ];
        
    }
 
    ngOnInit() {
        this.getObservableItems();
        this.getObservableVarHeaders();
        //this.getPromiseData();               
    }

    getObservableItems() {
      this.dataService.getFiles()
                      .subscribe(
                        rawdata => this.data = rawdata,
                        error =>  this.errorMessage = <any>error);
    }

    getObservableVarHeaders() {
        this.dataService.getVarHeaders()
                      .subscribe(
                        rawdata => this.vheaders = rawdata,
                        error =>  this.errorMessage = <any>error);
    }

    /** Optional way to retrieve data - w/Promise */
    getPromiseData() {
      this.dataService.getData()
                    .then(rawdata => this.data = rawdata,
                     error =>  this.errorMessage = <any>error);
      
    }

}
