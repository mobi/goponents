import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoModalService, GoSelectComponent } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './select-docs.component.html'
})
export class SelectDocsComponent implements OnInit {
  items: any = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' }
  ];

  select1: FormControl = new FormControl('');
  select2: FormControl = new FormControl('');
  select3: FormControl = new FormControl('');
  select4: FormControl = new FormControl('');
  select5: FormControl = new FormControl('');
  select6: FormControl = new FormControl('');
  select7: FormControl = new FormControl('');
  select8: FormControl = new FormControl('');
  select9: FormControl = new FormControl('');
  select10: FormControl = new FormControl('');

  hints: Array<string> = ['please select you favorite candy'];

  loadingSelectOptions: boolean = true;

  select1Code: string = `
  <go-select
    [control]="select"
  ></go-select>
  `;

  select2Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy"
  ></go-select>
  `;

  select3Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy"
    key="your-favorite-candy"
  ></go-select>
  `;

  select3KeyCode: string = `
  <label for="your-favorite-candy">Favorite Candy</label>
  <ng-select ng-reflect-label-for-id="your-favorite-candy"></ng-select>
  `;

  select4Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy"
  ></go-select>
  `;

  select4HintsCode: string = `
  hints: Array<string> = [
    'please select you favorite candy'
  ];
  `;

  select5Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy"
  ></go-select>
  `;

  select5ErrorsCode: string = `
  this.select5.setErrors([
    {
      message: 'An error occurred.'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;

  select6Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    label="Favorite Candy"
  ></go-select>
  `;

  select6ItemCode: string = `
  items = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' }
  ];
  `;

  select7Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    [multiple]="true"
    label="Favorite Candy"
  ></go-select>
  `;

  select8Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    [multiple]="true"
    placeholder="Select a Candy"
    label="Favorite Candy"
  ></go-select>
  `;

  select9Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select9"
    [items]="items"
    [multiple]="true"
    label="Favorite Candy"
    [loading]="loadingSelectOptions"
  ></go-select>
  `;

  select9LoadingCode: string = `
  loadingSelectOptions: boolean = true;
  `;

  select10OpenModalCode: string = `
  openModal(): void {
    this.goModalService.openModal(
      GoSelectComponent,
      {
        appendTo: 'body',
        bindLabel: 'name',
        bindValue: 'value',
        control: this.select10,
        items: this.items,
        label: 'Favorite Candy'
      }
    );
  }
  `;

  constructor(
    private goModalService: GoModalService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Select';
  }

  ngOnInit(): void {
    setTimeout((): void => {
      this.select5.setErrors([
        {
          message: 'An error occurred.'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);
    });
  }

  openModal(): void {
    this.goModalService.openModal(
      GoSelectComponent,
      {
        appendTo: 'body',
        bindLabel: 'name',
        bindValue: 'value',
        control: this.select10,
        items: this.items,
        label: 'Favorite Candy',
      }
    );
  }
}
