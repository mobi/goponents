import { ElementRef, EmbeddedViewRef, EventEmitter, TemplateRef } from '@angular/core';
import { GoHeaderBarDirective } from './go-header-bar.directive';
import { GoHeaderBarService } from './go-header-bar.service';

describe('GoHeaderBarDirective', () => {
  let templateRef: TemplateRef<any>;
  let service: GoHeaderBarService;
  let directive: GoHeaderBarDirective;

  beforeEach(() => {
    templateRef = {
      elementRef: new ElementRef('a'),
      createEmbeddedView(context: undefined): EmbeddedViewRef<undefined> {
        return undefined;
      }
    };

    service = new GoHeaderBarService();
    directive = new GoHeaderBarDirective(templateRef, service);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(service.activeItem, 'next');
    directive.showBackArrow = true;
    directive.handleBackButton = new EventEmitter<any>();
    directive.heading = 'Heading';

    directive.ngOnInit();

    expect(service.activeItem.next).toHaveBeenCalledWith({
      templateRef: templateRef,
      title: directive.heading,
      showBackArrow: directive.showBackArrow,
      backButtonFn: directive.handleBackButton
    });
  });
});
