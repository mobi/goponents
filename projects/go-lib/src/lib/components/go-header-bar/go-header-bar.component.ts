import { Location } from '@angular/common';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'go-header-bar',
  templateUrl: './go-header-bar.component.html',
  styleUrls: ['./go-header-bar.component.scss']
})
export class GoHeaderBarComponent implements OnInit {

  @Input() title: string;
  @Input() showBackArrow: boolean = false;
  @Input() goBackFn: Function;

  @ViewChild('headerBar') headerBar: ElementRef;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack(): void {
    if (this.goBackFn) {
      this.goBackFn();
    } else {
      this.location.back();
    }
  }

  backButtonDisabled(): boolean {
    return !this.goBackFn && window.history.length === 1;
  }

  getHeight(): string {
    return this.headerBar.nativeElement.offsetHeight.toString() + 'px';
  }

  getWidth(): string {
    return this.headerBar.nativeElement.parentElement.parentElement.offsetWidth.toString() + 'px';
  }
}
