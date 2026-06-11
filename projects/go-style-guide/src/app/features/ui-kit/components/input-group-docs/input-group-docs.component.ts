import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-input-group-docs',
  templateUrl: './input-group-docs.component.html'
})
export class InputGroupDocsComponent implements OnInit {

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-input-group';

  // Controls for examples
  usernameControl: FormControl = new FormControl('');
  priceControl: FormControl = new FormControl('');
  websiteControl: FormControl = new FormControl('');
  searchControl: FormControl = new FormControl('');
  emailControl: FormControl = new FormControl('');

  deptControl: FormControl = new FormControl(null);
  deptItems: { id: number; name: string }[] = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Product' },
    { id: 4, name: 'Finance' },
  ];

  basicExample: string = `
  <go-input-group label="Username">
    <span goInputGroupPrepend>@</span>
    <go-input [control]="usernameControl"></go-input>
  </go-input-group>
  `;

  appendExample: string = `
  <go-input-group label="Amount">
    <go-input [control]="priceControl"></go-input>
    <span goInputGroupAppend>.00</span>
  </go-input-group>
  `;

  bothExample: string = `
  <go-input-group label="Website">
    <span goInputGroupPrepend>https://</span>
    <go-input [control]="websiteControl"></go-input>
    <span goInputGroupAppend>.com</span>
  </go-input-group>
  `;

  buttonExample: string = `
  <!-- Append button (button is a direct child of go-input-group) -->
  <go-input-group>
    <go-input [control]="searchControl" placeholder="Search..."></go-input>
    <go-button goInputGroupAppend buttonVariant="primary">Go</go-button>
  </go-input-group>

  <!-- Prepend button -->
  <go-input-group label="Email">
    <go-button goInputGroupPrepend buttonVariant="secondary">Search</go-button>
    <go-input [control]="emailControl"></go-input>
  </go-input-group>
  `;


  advancedExample: string = `
  <go-input-group label="Department">
    <go-select [control]="deptControl" [items]="deptItems" bindLabel="name" bindValue="id"></go-select>
    <go-button goInputGroupAppend buttonVariant="primary" buttonIcon="save"></go-button>
    <go-button goInputGroupAppend buttonVariant="primary" buttonIcon="delete"></go-button>
    <go-button goInputGroupAppend buttonVariant="primary" buttonIcon="filter_list"></go-button>
  </go-input-group>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Input Group';
    this.subNavService.linkToSource = this.linkToSource;
  }

  ngOnInit(): void {}
}
