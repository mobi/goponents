import { ToastrService } from 'ngx-toastr';
export declare class GoMessageService {
    private toastr;
    constructor(toastr: ToastrService);
    /**
     * Show a success message.
     * @param msg
     * @param title
     */
    sendMessage(msg?: string, title?: string): void;
    logError(msg?: string, title?: string): void;
}
