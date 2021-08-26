import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-checkbox',
  templateUrl: './go-checkbox.component.html'
})
export class GoCheckboxComponent implements OnInit, OnChanges, AfterViewInit {
  id: string;

  @Input() control: FormControl | AbstractControl;
  @Input() hints: string[];
  @Input() indeterminate: boolean = false;
  @Input() key: string;
  @Input() label: string;
  @Input() theme: string = 'light';

  @ViewChild('hiddenInputRef') hiddenInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'checkbox');
  }

  ngOnChanges(): void {
    if (this.hiddenInputRef) {
      this.setIndeterminateState();
    }
  }

  ngAfterViewInit(): void {
    this.setIndeterminateState();
  }

  private setIndeterminateState(): void {
    this.hiddenInputRef.nativeElement.indeterminate = this.indeterminate;
  }
}
