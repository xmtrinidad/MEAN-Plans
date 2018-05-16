import { Component, OnInit } from '@angular/core';
import {Plan} from "../models/Plan";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plans: Plan[] = [
    {
      icon: 'fas fa-paper-plane',
      type: 'basic',
      price: 29,
      accounts: 15,
      space: 100,
      domains: 1,
      bandwidth: '500 GB',
      btn: {
        text: 'get started',
        color: '#64b5ff'
      }
    },
    {
      icon: 'fas fa-plane',
      type: 'advanced',
      price: 49,
      accounts: 30,
      space: 300,
      domains: 3,
      bandwidth: '1 TB',
      btn: {
        text: 'get started',
        color: '#64b5ff'
      }
    },
    {
      icon: 'fas fa-fighter-jet',
      type: 'pro',
      price: 79,
      accounts: 75,
      space: 1000,
      domains: 7,
      bandwidth: '5 TB',
      btn: {
        text: 'contact us',
        color: '#f75363'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
