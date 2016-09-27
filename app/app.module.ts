import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, InputTextModule,DataTableModule,ButtonModule,DialogModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
