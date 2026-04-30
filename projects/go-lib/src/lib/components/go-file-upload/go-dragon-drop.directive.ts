import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Directive({
    selector: '[goDragonDrop]',
})
export class DragonDropDirective {
  active: boolean = false;
  @Input() class: string = ''; // override the standard class attr with a new one.
  @Input() activeClass: string = '';
  @Output() dropped: EventEmitter<any> = new EventEmitter<any>();
  @Output() dragonDropOver: EventEmitter<void> = new EventEmitter<void>();
  @Output() dragonDropleave: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class')
    get hostClasses(): string {
      return [
        this.class,
        this.active ? this.activeClass : '',
      ].join(' ');
    }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dragonDropOver.emit();
    this.active = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dragonDropleave.emit();
    this.active = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dropped.emit(evt);
    this.active = false;
  }
}
