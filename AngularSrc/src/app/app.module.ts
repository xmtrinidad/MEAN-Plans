import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { PlanComponent } from './plans/plan/plan.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    PlanComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
