import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './standards.component.html',
    standalone: false
})
export class StandardsComponent implements OnInit {

  pageTitle: String;

  ngOnInit(): void {
    this.pageTitle = 'Standards';
  }
}
