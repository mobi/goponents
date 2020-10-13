import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
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
  splitButtonClassObject: object = {};
  loaderClassObject: object = {};
  loaderType: 'light' | 'dark' = 'light';
  showSplitButtonMenu: boolean = false;
  splitButtonIconModifier: 'light' | 'dark' = 'light';

  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string = 'primary';
  @Input() isProcessing: boolean = false;
  @Input() splitButtonOptions: string[] = [];
  @Input() useDarkTheme: boolean = false;

  @Output() handleClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    this.closeSplitButtonMenuEvent(target);
  }

  constructor(
    private elementRef: ElementRef,
  ) { }

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

  toggleSplitButtonMenu(): void {
    this.showSplitButtonMenu = !this.showSplitButtonMenu;
  }

  private setupButton(): void {
    this.buttonVariant = this.buttonVariant === 'positive' ? 'primary' : this.buttonVariant;
    this.splitButtonIconModifier = this.buttonVariant === 'secondary' || this.buttonVariant === 'tertiary' ? 'dark' : 'light';

    this.classObject = {
      'go-button--dark': this.useDarkTheme,
      'go-button--loading': this.isProcessing,
      'go-button--split': this.splitButtonOptions.length
    };

    this.classObject['go-button--' + this.buttonVariant] = true;
    this.splitButtonClassObject['split-button--' + this.buttonVariant] = true;
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

  private closeSplitButtonMenuEvent(target: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.showSplitButtonMenu = false;
    }
  }
}
