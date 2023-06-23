import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule } from '@angular/forms';   //required for TDF

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule     //required for TDF
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
