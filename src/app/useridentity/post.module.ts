import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLettersPipe } from '../helpers/firstLetters.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirstLettersPipe
  ]
})
export class UserIdentityModule { }
