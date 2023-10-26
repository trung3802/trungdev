import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PhuongtrinhComponent } from './phuongtrinh/phuongtrinh.component';
import { Tinhtong1nComponent } from './tinhtong1n/tinhtong1n.component';
import { Tinhtich1nComponent } from './tinhtich1n/tinhtich1n.component';
import { SoNguyenToComponent } from './so-nguyen-to/so-nguyen-to.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PhuongtrinhComponent,
    Tinhtong1nComponent,
    Tinhtich1nComponent,
    SoNguyenToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
