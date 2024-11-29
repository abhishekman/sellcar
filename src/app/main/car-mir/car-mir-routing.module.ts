import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarMirComponent } from './car-mir.component';
const routes: Routes = [
  {path:"",component:CarMirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarMirRoutingModule { }
