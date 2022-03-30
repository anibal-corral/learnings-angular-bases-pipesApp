import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sells/pages/basics/basics.component';
import { NumbersComponent } from './sells/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sells/pages/no-commons/no-commons.component';
import { SortComponent } from './sells/pages/sort/sort.component';


const routes:Routes=[
{
  path:'',
  component:BasicsComponent,
  pathMatch:'full'
},
{
  path:'numbers',
  component:NumbersComponent,
  
},
{
  path:'no-commons',
  component:NoCommonsComponent,
  
},
{
  path:'sort',
  component:SortComponent,
  pathMatch:'full'
},
{
  path:'**',
  redirectTo:'',
}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
