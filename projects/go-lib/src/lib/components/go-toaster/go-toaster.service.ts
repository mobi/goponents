import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

import { GoToastComponent } from '../go-toast/go-toast.component';

@Injectable({
  providedIn: 'root'
})
export class GoToasterService {

  toasts: GoToastComponent[] = [];

  constructor() { }

  /**
   * Use this method to display success toasts
   * @param toast
   * @param duration
   */
  toastSuccess(toast?: ToastInterface, duration: number = 3000) : void {
    toast = toast !== null ? toast : { message: 'Success!' };
    toast.type = 'positive';
    this.addToast(this.setupComponent(toast), duration);
  }

  /** 
   * Use this method to display informative toasts
   * __You must pass a message or header, there is no default text set__
   * `this.goToastService.toastInfo({ message: 'This is a test!' });`
   * @param toast
   * @param duration
   */
  toastInfo(toast?: ToastInterface, duration: number = 3000) : void {
    toast = toast !== null ? toast : { };
    toast.type = 'neutral';
    this.addToast(this.setupComponent(toast), duration);
  }

  /**
   * Use this method to display error toasts
   * @param toast
   * @param duration
   */
  toastError(toast?: ToastInterface, duration: number = 3000) : void {
    toast = toast !== null ? toast : { message: 'Something went wrong' };
    toast.type = 'negative';
    this.addToast(this.setupComponent(toast), duration);
  }

  //#region Private Methods

  private setupComponent(toastInterface: ToastInterface) : GoToastComponent {
    let comp: GoToastComponent = new GoToastComponent();
    comp.message = toastInterface.message;
    comp.type = toastInterface.type;
    comp.header = toastInterface.header;

    return  comp;
  }

  private addToast(comp: GoToastComponent, showPeriod: number) : void {
    this.toasts.push(comp);
    this.setupTimer(comp, showPeriod);
  }

  private setupTimer(comp: GoToastComponent, showPeriod: number) :void {
    timer(showPeriod).subscribe(() => {
      this.toasts.splice(this.toasts.indexOf(comp), 1);
    });
  }

  //#endregion
}

interface ToastInterface {
  header?: string;
  message?: string;
  type?: string;
}
