import { Component } from '@angular/core';
import { GoToasterService } from './go-toaster.service';
import { toastAnimation } from '../../animations/toasts';

@Component({
  animations: [toastAnimation],
  selector: 'go-toaster',
  templateUrl: './go-toaster.component.html',
  styleUrls: ['./go-toaster.component.scss']
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
