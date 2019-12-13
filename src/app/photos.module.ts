import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

/*
  A module can have lots ad lots of declarions, but I have to export those declarions to be accessible outside of this module
*/
// if I have 100 components in declarions I must have them into exports as well

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent],
  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {}
