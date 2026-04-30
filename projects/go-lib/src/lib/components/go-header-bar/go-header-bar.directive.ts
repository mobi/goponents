import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  TemplateRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoHeaderBarService } from './go-header-bar.service';

import { GoIconModule } from '../go-icon/go-icon.module';
@Directive({
    selector: '[goHeaderBar]',
})
export class GoHeaderBarDirective implements OnChanges {

  @Input() heading: string;
  @Input() showBackArrow: boolean;

  @Output() handleBackButton: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private template: TemplateRef<any>,
    private goHeaderBarService: GoHeaderBarService
  ) { }

  ngOnChanges(): void {
    this.goHeaderBarService.activeItem.next({
      templateRef: this.template,
      title: this.heading,
      showBackArrow: this.showBackArrow,
      backButtonFn: this.handleBackButton
    });
  }

}
