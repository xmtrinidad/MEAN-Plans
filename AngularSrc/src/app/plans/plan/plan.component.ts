import {Component, Input, OnInit} from '@angular/core';
import {Plan} from "../../models/Plan";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;

  constructor() { }

  ngOnInit() {
  }

}
