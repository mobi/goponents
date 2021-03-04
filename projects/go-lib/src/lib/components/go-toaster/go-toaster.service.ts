import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { ToastInterface } from './go-toaster.model';
import { GoToastComponent } from '../go-toast/go-toast.component';

@Injectable({
  providedIn: 'root'
})
export class GoToasterService {

  toasts: GoToastComponent[] = [];
  timers: Subscription[] = [];

  constructor() { }

  /**
   * Use this method to display success toasts
   * @param toast
   * @param duration
   */
  toastSuccess(toast?: ToastInterface, duration: number = 3000): void {
    toast = toast !== undefined ? toast : { message: 'Success!' };
    toast.type = 'positive';
    this.addToast(this.setupComponent(toast, duration));
  }

  /**
   * Use this method to display informative toasts
   * __You must pass a message or header, there is no default text set__
   * `this.goToastService.toastInfo({ message: 'This is a test!' });`
   * @param toast
   * @param duration
   */
  toastInfo(toast?: ToastInterface, duration: number = 3000): void {
    toast = toast !== undefined ? toast : { };
    toast.type = 'neutral';
    this.addToast(this.setupComponent(toast, duration));
  }

  /**
   * Use this method to display error toasts
   * @param toast
   * @param duration
   */
  toastError(toast?: ToastInterface, duration: number = 3000): void {
    toast = toast !== undefined ? toast : { message: 'Something went wrong' };
    toast.type = 'negative';
    this.addToast(this.setupComponent(toast, duration));
  }

  /**
   * Use this method to stop the timer on every toast
   */
  pauseTimers(): void {
    this.timers.forEach((clock: Subscription) => {
      clock.unsubscribe();
    });
    this.timers = [];
  }

  /**
   * Use this method to restart the timer for every toast
   */
  startTimers(): void {
    this.toasts.forEach((toast: GoToastComponent) => {
      this.setupTimer(toast);
    });
  }

  //#region Private Methods

  private setupComponent(toastInterface: ToastInterface, duration: number): GoToastComponent {
    const comp: GoToastComponent = new GoToastComponent();
    comp.message = toastInterface.message;
    comp.type = toastInterface.type;
    comp.header = toastInterface.header;
    comp.dismissable = toastInterface.dismissable;
    comp.duration = duration;

    return  comp;
  }

  private addToast(comp: GoToastComponent): void {
    this.toasts.push(comp);
    this.setupTimer(comp);
  }

  private setupTimer(comp: GoToastComponent): void {
    const clock: Subscription = timer(comp.duration).subscribe(() => {
      const ind: number = this.toasts.indexOf(comp);
      this.toasts.splice(ind, 1);
      this.timers[ind].unsubscribe();
      this.timers.splice(ind, 1);
    });
    this.timers.push(clock);
  }

  //#endregion
}
