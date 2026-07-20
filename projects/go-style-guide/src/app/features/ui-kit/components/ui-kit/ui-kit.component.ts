import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './ui-kit.component.html'
})
export class UiKitComponent implements OnInit {

  pageTitle: string;

  ngOnInit(): void {
    this.pageTitle = 'Components';
  }
}
