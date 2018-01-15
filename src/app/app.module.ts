import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonbarComponent } from './buttonbar/buttonbar.component';
import { ReviewbarComponent } from './reviewbar/reviewbar.component';
import { IncludedComponent } from './included/included.component';
import { PackagesComponent } from './packages/packages.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    ButtonbarComponent,
    ReviewbarComponent,
    IncludedComponent,
    PackagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
