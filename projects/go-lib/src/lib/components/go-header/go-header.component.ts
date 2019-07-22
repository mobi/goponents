import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnInit {

  @Input() logo: string = '';

  constructor() { }

  ngOnInit() {
  }

}
