import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DataTableDirectives } from 'angular2-datatable/datatable';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    JsonpModule 
    ],
  declarations: [ AppComponent, DataTableDirectives ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
