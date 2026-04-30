import { Component, OnInit } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    templateUrl: './ui-kit.component.html',
})
export class UiKitComponent implements OnInit {

  pageTitle: String;

  ngOnInit(): void {
    this.pageTitle = 'Components';
  }
}
