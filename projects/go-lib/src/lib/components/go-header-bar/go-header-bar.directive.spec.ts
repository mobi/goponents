import { GoHeaderBarDirective } from './go-header-bar.directive';
import { GoHeaderBarService } from './go-header-bar.service';

describe('GoHeaderBarDirective', () => {
  it('should create an instance', () => {
    const templateRefSpy: any = jasmine.createSpyObj('TemplateRef', ['a']);
    const headerBarService: GoHeaderBarService = new GoHeaderBarService();

    const directive: GoHeaderBarDirective = new GoHeaderBarDirective(templateRefSpy, headerBarService);
    expect(directive).toBeTruthy();
  });
});
