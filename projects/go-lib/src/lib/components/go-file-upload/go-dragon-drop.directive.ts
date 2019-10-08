import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[goDragonDrop]'
})
export class DragonDropDirective {
  @Output() fileDropped: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('style.background-color') background: string = '#FFF';
  @HostBinding('style.opacity') opacity: string = '1';

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#F0F0F0';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#FFF';
    this.opacity = '1';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#FFF';
    this.opacity = '1';
    const files: File[] = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
