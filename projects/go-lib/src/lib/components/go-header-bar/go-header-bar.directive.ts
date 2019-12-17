import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { GoHeaderBarService } from './go-header-bar.service';

@Directive({
  selector: '[goHeaderBar]'
})
export class GoHeaderBarDirective implements OnInit {

  @Input() heading: string;
  @Input() showBackArrow: boolean;
  @Input() goBack: Function;

  constructor(
    private template: TemplateRef<any>,
    private goHeaderBarService: GoHeaderBarService
  ) { }

  ngOnInit(): void {
    this.goHeaderBarService.activeItem.next({
      templateRef: this.template,
      title: this.heading,
      showBackArrow: this.showBackArrow,
      goBack: this.goBack
    });
  }

}
