import { GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs/internal/Subject';
export declare class GoModalService {
    activeModalComponent: Subject<GoModalItem>;
    modalOpen: Subject<boolean>;
    constructor();
    openModal(component: any, bindings: {}): void;
    setComponent(component: any, bindings: {}): void;
    toggleModal(open?: boolean): void;
}
