import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardComponent } from '../../shared/components/card/card/card.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe
  ],
  imports: [CommonModule, PhotoModule, CardComponent]
})
export class PhotoListModule {}
