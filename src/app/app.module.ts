import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos.module';
import { PhotoService } from './photos/photo/photo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
