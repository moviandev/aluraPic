import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe
  ]
})
export class PhotoListModule {}
