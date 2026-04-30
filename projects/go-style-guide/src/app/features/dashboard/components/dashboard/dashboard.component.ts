import { Component, OnInit } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  pageTitle: String;

  ngOnInit(): void {
    this.pageTitle = 'Home';
  }
}
