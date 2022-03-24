import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhamaHeaderComponent } from './phama-header/phama-header.component';
import { PhamaContentComponent } from './phama-content/phama-content.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PhamaHeaderComponent,
    PhamaContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
