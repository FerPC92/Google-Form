import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import {MainService} from './services/main.service'

import { HttpClientModule, HttpClient} from '@angular/common/http';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
