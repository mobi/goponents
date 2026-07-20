import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  pageTitle: string;

  ngOnInit(): void {
    this.pageTitle = 'Home';
  }
}
