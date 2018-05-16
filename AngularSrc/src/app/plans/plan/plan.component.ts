import {Component, Input, OnInit} from '@angular/core';
import {Plan} from "../../models/Plan";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
