import { Component, OnInit } from '@angular/core';
import { DataService } from './service/dataservice';
import { CsvRow } from './dto/csv-row';
import { Configuration } from './constants/app.constants';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  providers: [DataService, Configuration]
})
export class AppComponent implements OnInit {
  sendFileUrl : string;
  data : CsvRow[];
  vheaders : String[];
  errorMessage : 'Observable';

    constructor(private dataService: DataService, private configuration: Configuration) { 
      this.dataService=dataService;
      this.sendFileUrl = configuration.ServerWithApiUrl + 'upload';        
    }
 
    ngOnInit() {
        this.getObservableVarHeaders();
        this.getObservableItems();  
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
