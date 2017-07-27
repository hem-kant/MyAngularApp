import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataserviceService } from './dataservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    // FromsModule,
    // HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
