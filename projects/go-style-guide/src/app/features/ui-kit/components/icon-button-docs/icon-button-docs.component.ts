import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button-docs',
  templateUrl: './icon-button-docs.component.html',
  styleUrls: ['./icon-button-docs.component.scss']
})
export class IconButtonDocsComponent {
  pageTitle: string = 'Icon Button';

  componentBindings: string = `
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonSize: string = 'small';
  @Input() buttonTitle: string;

  @Output() handleClick: EventEmitter<void> = new EventEmitter();
  `;

  disabledExample: string = `
  <go-icon-button (handleClick)="testClick()" buttonIcon="home" buttonDisabled="true"></go-icon-button>
  `;

  iconExample: string = `
  <go-icon-button (handleClick)="testClick()" buttonIcon="home"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="school"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="work"></go-icon-button>
  `;

  sizeExample: string = `
  <go-icon-button (handleClick)="testClick()" buttonIcon="home" buttonSize="small"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="home" buttonSize="medium"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="home" buttonSize="large"></go-icon-button>
  `;

  titleExample: string = `
  <go-icon-button (handleClick)="testClick()" buttonIcon="home" buttonTitle="Home"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="school" buttonTitle="School"></go-icon-button>

  <go-icon-button (handleClick)="testClick()" buttonIcon="work" buttonTitle="Work"></go-icon-button>
  `;

  public testClick(): void {
    alert('Button clicked!');
  }
}
