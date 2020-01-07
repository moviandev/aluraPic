import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, ReactiveFormsModule, VmessageModule]
})
export class HomeModule {}
