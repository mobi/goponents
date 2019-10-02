import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  pageTitle: String;

  ngOnInit(): void {
    this.pageTitle = 'Home';
  }
}
