import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-header-bar',
  templateUrl: './go-header-bar.component.html',
  styleUrls: ['./go-header-bar.component.scss']
})
export class GoHeaderBarComponent implements OnInit {

  @Input() title: string;
  @Input() showBackArrow: boolean = false;
  @Input() goBackFn: Function;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    if (this.goBackFn) {
      this.goBackFn();
    } else {
      this.location.back();
    }
  }

  disableBackButton(): boolean {
    return false;
  }
}
