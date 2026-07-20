import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './standards.component.html'
})
export class StandardsComponent implements OnInit {

  pageTitle: string;

  ngOnInit(): void {
    this.pageTitle = 'Standards';
  }
}
