import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[goDragonDrop]'
})
export class DragonDropDirective {
  active: boolean = false;
  @Input() class: string = ''; // override the standard class attr with a new one.
  @Input() activeClass: string = '';
  @Output() dropped: EventEmitter<any> = new EventEmitter<any>();

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
    this.active = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.active = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.active = false;
    this.dropped.emit(evt);
  }
}
