import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiUploadImageComponent } from './ui-upload-image.component';

const routes: Routes = [
  {path:'',component:UiUploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiUploadImageRoutingModule { }
