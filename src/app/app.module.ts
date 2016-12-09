import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {ClientListComponent} from "../components/client-list/client-list.component";
import {ClientService} from "../config/services/client.service";
import {ClientPipe} from "../config/pipes/client.pipe";


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    ClientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
