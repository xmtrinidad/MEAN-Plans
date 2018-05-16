import { Component, OnInit } from '@angular/core';
import {PlanService} from "../plans/plan.service";
import {ActivatedRoute} from "@angular/router";
import {Plan} from "../models/Plan";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  plan: Plan;
  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService
  ) { }

  ngOnInit() {
    const planName = this.route.snapshot.paramMap.get('plan');
    this.plan = this.planService.getPlan(planName);
  }

  onRegisterSubmit() {
    console.log(this.email, this.password);
    this.email = this.password = undefined;
  }
}
