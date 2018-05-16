import { Component, OnInit } from '@angular/core';
import {PlanService} from "../plans/plan.service";
import {ActivatedRoute} from "@angular/router";
import {Plan} from "../models/Plan";
import {User} from "../models/User";

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
    // Get plan name from URL
    const planName = this.route.snapshot.paramMap.get('plan');
    this.plan = this.planService.getPlan(planName);
  }

  onRegisterSubmit() {
    // Create new User
    const registeredUser: User = {
      email: this.email,
      password: this.password,
      plan: this.plan.type
    };

    // TODO: Send registered user to back-end service
    console.log(registeredUser);

    this.email = this.password = undefined;
  }
}
