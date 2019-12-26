import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosComponent } from './photos/photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photos/photo-list/filterByDescription.pipe';
import { LoadButtonComponent } from './photos/photo-list/load-button/load-button.component';

/*
  A module can have lots ad lots of declarions, but I have to export those declarions to be accessible outside of this module
*/
// if I have 100 components in declarions I must have them into exports as well

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent
  ],
  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {}
