import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './user/add/add.component';
import { ListComponent } from './user/list/list.component';
import { ViewComponent } from './user/view/view.component';

const routes: Routes = [
  {path: '' , redirectTo: 'list' , pathMatch: 'full'},
  {path: 'list' , component: ListComponent },
  {path: 'add' , component: AddComponent},
  {path:'view/:id' , component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
