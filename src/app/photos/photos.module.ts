import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';

/*
  A module can have lots ad lots of declarions, but I have to export those declarions to be accessible outside of this module
*/
// if I have 100 components in declarions I must have them into exports as well

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoModule
  ]
})
export class PhotosModule {}
