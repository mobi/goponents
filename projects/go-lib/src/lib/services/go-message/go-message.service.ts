import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class GoMessageService {
  constructor(
    private toastr: ToastrService
  ) { }

  /**
   * Show a success message.
   * @param msg 
   * @param title 
   */
  public sendMessage(msg: string = '', title: string = 'Success!') {
    this.toastr.success(msg, title);
  }

  public logError(msg: string = '', title: string = 'Something went wrong.') {
    this.toastr.error(msg, title);
  }
}
