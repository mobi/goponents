import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './ui-kit.component.html',
    standalone: false
})
export class UiKitComponent implements OnInit {

  pageTitle: String;

  ngOnInit(): void {
    this.pageTitle = 'Components';
  }
}
