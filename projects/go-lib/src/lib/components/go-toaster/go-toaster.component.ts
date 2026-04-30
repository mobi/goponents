import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToasterService } from './go-toaster.service';
import { toastAnimation } from '../../animations/toasts';

import { GoToastModule } from '../go-toast/go-toast.module';
@Component({
    animations: [toastAnimation],
    selector: 'go-toaster',
    templateUrl: './go-toaster.component.html',
    styleUrls: ['./go-toaster.component.scss'],
  imports: [CommonModule, GoToastModule],
})
export class GoToasterComponent {
  constructor(public goToasterService: GoToasterService) { }

  pauseTimers(): void {
    this.goToasterService.pauseTimers();
  }

  restartTimers(): void {
    this.goToasterService.startTimers();
  }

  dismissToast(index: number): void {
    this.goToasterService.removeToast(index);
  }
}
