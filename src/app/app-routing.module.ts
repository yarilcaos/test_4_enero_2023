import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [{
  path:'users', component:UsertableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
