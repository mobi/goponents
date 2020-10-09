import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { fadeTemplateAnimation } from '../../animations/fade.animation';

@Component({
  animations: [fadeTemplateAnimation],
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['./go-button.component.scss']
})
export class GoButtonComponent implements OnChanges, OnInit {
  classObject: object = {};
  dropdownClassObject: object = {};
  loaderClassObject: object = {};
  loaderType: 'light' | 'dark' = 'light';

  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string = 'primary';
  @Input() isProcessing: boolean = false;
  @Input() useDarkTheme: boolean = false;

  @Output() handleClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  clicked(): void {
    this.handleClick.emit(this.isProcessing);
  }

  reset(): void { }

  ngOnInit(): void {
    this.setupButton();
  }

  ngOnChanges(): void {
    this.setupButton();
    this.buttonLoader();
  }

  private setupButton(): void {
    this.buttonVariant = this.buttonVariant === 'positive' ? 'primary' : this.buttonVariant;

    this.classObject = {
      'go-button--dark': this.useDarkTheme,
      'go-button--loading': this.isProcessing,
      // TODO: set this based on Input
      'go-button--split': true
    };

    this.classObject['go-button--' + this.buttonVariant] = true;
    this.dropdownClassObject['go-button--' + this.buttonVariant] = true;
  }

  private buttonLoader(): void {
    if (this.isAlternativeDark()) {
      this.loaderType = 'light';
      this.loaderClassObject['go-button__loader--dark'] = true;
    } else if (this.isAlternativeLight()) {
      this.loaderType = 'dark';
      this.loaderClassObject['go-button__loader--light'] = true;
    } else {
      this.loaderType = 'light';
      this.loaderClassObject[`go-button__loader--${this.buttonVariant}`] = true;
    }
  }

  private isAlternativeDark(): boolean {
    return (this.buttonVariant === 'secondary' || this.buttonVariant === 'tertiary') && this.useDarkTheme;
  }

  private isAlternativeLight(): boolean {
    return (this.buttonVariant === 'secondary' || this.buttonVariant === 'tertiary') && !this.useDarkTheme;
  }
}
