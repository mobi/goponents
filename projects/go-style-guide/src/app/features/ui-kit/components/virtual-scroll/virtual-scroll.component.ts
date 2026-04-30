import { Component } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
})
export class VirtualScrollComponent { }
