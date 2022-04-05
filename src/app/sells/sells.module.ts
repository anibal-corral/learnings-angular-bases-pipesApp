import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SellsModule { }
