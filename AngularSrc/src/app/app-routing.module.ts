import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {PlansComponent} from "./plans/plans.component";

const routes: Routes = [
  { path: 'register/:plan', component: RegisterComponent },
  { path: 'plans', component: PlansComponent },
  { path: '**', redirectTo: '/plans', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule {
}
