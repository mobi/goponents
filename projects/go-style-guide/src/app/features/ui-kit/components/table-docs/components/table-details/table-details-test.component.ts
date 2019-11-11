import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-details-test',
  templateUrl: './table-details-test.component.html'
})
export class TableDetailsTestComponent implements OnInit {
  loading: boolean = false;

  @Input() row: any;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
