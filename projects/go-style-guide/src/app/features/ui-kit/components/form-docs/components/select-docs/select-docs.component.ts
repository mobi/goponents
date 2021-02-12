import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoModalService, GoSelectComponent } from '../../../../../../../../../go-lib/src/public_api';
import { SubNavService } from '../../../../../../shared/components/sub-nav/sub-nav.service';
import { debounceTime, map } from 'rxjs/operators';
import { concat, of, Subject } from 'rxjs';

@Component({
  templateUrl: './select-docs.component.html'
})
export class SelectDocsComponent implements OnInit {
  itemInput: Subject<string> = new Subject<string>();
  options$: any;

  items: any = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' },
    { value: 3, name: 'Snickers' },
    { value: 4, name: 'Twizzlers' },
    { value: 5, name: 'Skittles' },
    { value: 6, name: 'Starburst' },
    { value: 7, name: 'Sour Patch Kids' }
  ];

  groupedItems: any = [
    { value: 1, name: 'Mustang', manufacturer: 'Ford' },
    { value: 2, name: 'Focus', manufacturer: 'Ford' },
    { value: 3, name: 'Camero', manufacturer: 'Chevrolet' },
    { value: 4, name: 'Corvette', manufacturer: 'Chevrolet' },
    { value: 5, name: 'Silverado', manufacturer: 'Chevrolet' }
  ];

  groupedItemsArray: any = [
    {
      manufacturer: 'Ford', cars: [
        {value: 1, name: 'Mustang'},
        {value: 2, name: 'Focus'}
      ]
    },
    {
      manufacturer: 'chevrolet',
      cars: [
        {value: 3, name: 'Camero'},
        {value: 4, name: 'Corvette'},
        {value: 5, name: 'Silverado'}]
    }
  ];

  selectData: any = [
    {
      value: 1,
      name: 'Harry',
    },
    {
      value: 2,
      name: 'Hermione',
    },
    {
      value: 3,
      name: 'Ron',
    },
    {
      value: 4,
      name: 'Voldermort',
    },
    {
      value: 5,
      name: 'Snake',
    },
    {
      value: 6,
      name: 'Hermione1',
    },
    {
      value: 7,
      name: 'Hermione2',
    },
    {
      value: 8,
      name: 'Hermione3',
    },
    {
      value: 9,
      name: 'Hermione4',
    },
    {
      value: 10,
      name: 'Hermione5',
    },
    {
      value: 11,
      name: 'Hermione6',
    },
    {
      value: 12,
      name: 'Hermione7',
    },
    {
      value: 13,
      name: 'Hermione7',
    },
    {
      value: 14,
      name: 'Hermione7',
    },
  ];

  newSelectData: any = [
    {
      value: 15,
      name: 'Alberta',
    },
    {
      value: 15,
      name: 'British Columbia',
    },
    {
      value: 16,
      name: 'Manitoba',
    },
    {
      value: 17,
      name: 'Northwest Territories',
    },
    {
      value: 18,
      name: 'Nunavut',
    },
    {
      value: 19,
      name: 'Ontario',
    },
    {
      value: 20,
      name: 'Prince Edward Island',
    },
  ];

  select1: FormControl = new FormControl();
  select2: FormControl = new FormControl();
  select3: FormControl = new FormControl();
  select4: FormControl = new FormControl();
  select5: FormControl = new FormControl();
  select6: FormControl = new FormControl();
  select7: FormControl = new FormControl();
  select8: FormControl = new FormControl();
  select9: FormControl = new FormControl();
  select10: FormControl = new FormControl();
  select11: FormControl = new FormControl();
  select12: FormControl = new FormControl();
  select13: FormControl = new FormControl();
  select14: FormControl = new FormControl();
  select15: FormControl = new FormControl();
  select16: FormControl = new FormControl();
  select17: FormControl = new FormControl();
  select18: FormControl = new FormControl();
  select19: FormControl = new FormControl({ value: '', disabled: true });
  select20: FormControl = new FormControl();
  select21: FormControl = new FormControl();

  hints: Array<string> = ['please select you favorite candy'];

  loadingSelectOptions: boolean = true;

  select1Code: string = `
  <go-select
    [control]="select">
  </go-select>
  `;

  select2Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy">
  </go-select>
  `;

  select3Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy"
    key="your-favorite-candy">
  </go-select>
  `;

  select3KeyCode: string = `
  <label for="your-favorite-candy">Favorite Candy</label>
  <ng-select ng-reflect-label-for-id="your-favorite-candy"></ng-select>
  `;

  select4Code: string = `
  <go-select
    [control]="select"
    label="Favorite Candy">
  </go-select>
  `;

  select4HintsCode: string = `
  hints: Array<string> = [
    'please select you favorite candy'
  ];
  `;

  select5Code: string = `
  <go-select
    [control]="select5"
    label="Favorite Candy">
  </go-select>
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
    label="Favorite Candy">
  </go-select>
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
    label="Favorite Candy">
  </go-select>
  `;

  select8Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    [multiple]="true"
    placeholder="Select a Candy"
    label="Favorite Candy">
  </go-select>
  `;

  select9Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select9"
    [items]="items"
    [multiple]="true"
    label="Favorite Candy"
    [loading]="loadingSelectOptions">
  </go-select>
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

  select11Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="options$ | async"
    [multiple]="true"
    label="Your Input"
    [typeahead]="itemInput"
    typeToSearchText="Search The Thing">
  </go-select>
  `;

  select11ComponentCode: string = `
  itemInput: Subject<string> = new Subject<string>();
  options$: any;

  this.options$ = concat(
    of([]),
    this.itemInput.pipe(
      debounceTime(600), // Delay user input
      map((input) => [input])
    )
  );
  `;

  select12Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    groupBy="manufacturer"
    [items]="groupedItems"
    label="Favorite Car">
  </go-select>
  `;

  select12ComponentCode: string = `
  groupedItems = [
    { value: 1, name: 'Mustang', manufacturer: 'Ford' },
    { value: 2, name: 'Focus', manufacturer: 'Ford' },
    { value: 3, name: 'Camero', manufacturer: 'Chevrolet' },
    { value: 4, name: 'Corvette', manufacturer: 'Chevrolet' },
    { value: 5, name: 'Silverado', manufacturer: 'Chevrolet' }
  `;

  select13Code: string = `
  <go-select
    bindValue="value"
    [control]="select"
    [items]="items"
    label="Select an Option">
    <ng-template #goSelectOption let-candy>
      {{ candy.value }} - {{ candy.name }}
    </ng-template>
  </go-select>
  `;

  select13ComponentCode: string = `
  items = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' }
  ];
  `;

  select14Code: string = `
  <go-select
    bindValue="value"
    [control]="select"
    [items]="items"
    label="Select an Option">
    <ng-template #goSelectSelectedOption let-candy>
      {{ candy.name }}
    </ng-template>
    <ng-template #goSelectOption let-candy>
      <div>
        Value: {{ candy.value }}
      </div>
      <div>
        Name: {{ candy.name }}
      </div>
    </ng-template>
  </go-select>
  `;

  select14ComponentCode: string = `
  items = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' }
  ];
  `;

  select15Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    [searchable]="false"
    label="Your Input">
  </go-select>
  `;

  select16ComponentCode: string = `
  items = [
    { value: 1, name: 'Reeses' },
    { value: 2, name: 'Mints' }
  ];
  `;

  select16Code: string = `
  <go-select
    bindLabel="name"
    bindValue="value"
    [clearable]="false"
    [control]="select16"
    [items]="items"
    label="Select an option">
  </go-select>
  `;

  select17Code_noSelectAll: string = `
  <!-- add: [showSelectAll]="false" -->

  <go-select
    bindLabel="name"
    bindValue="value"
    [control]="select"
    [items]="items"
    [multiple]="true"
    [showSelectAll]="false"
    label="Favorite Candy">
  </go-select>
  `;

  select18Code: string = `
  <go-select
    bindValue="value"
    [control]="select"
    [items]="groupedItemsArray"
    groupBy="cars"
    label="Select an Option">
    <ng-template #goSelectOptionGroup let-item>
      {{ item.manufacturer | uppercase }}
    </ng-template>
  </go-select>
  `;

  select20Code: string = `
  <go-select
    [control]="select"
    theme="dark"
    label="Favorite Candy">
  </go-select>
  `;

  select18ComponentCode: string = `
  groupedItemsArray: any = [
    {
      manufacturer: 'Ford',
      cars: [
        {value: 1, name: 'Mustang'},
        {value: 2, name: 'Focus'}
      ]
    },
    {
      manufacturer: 'chevrolet',
      cars: [
        {value: 3, name: 'Camero'},
        {value: 4, name: 'Corvette'},
        {value: 5, name: 'Silverado'}
      ]
    }
  ]
  `;

  select21Code: string = `
 <go-select
   [items]="selectData"
   [control]="select"
   bindValue="value"
   bindLabel="name"
   [hints]="['Scroll to end for loading more data']"
   label="Select an Option"
   (scrollToEnd)="scrollToEnd()"
   (scroll)="scroll($event)"
   [virtualScroll]="true">
  </go-select>
  `;

  select21ComponentCode: string = `
  scrollToEnd(): void {
    // Code here
  }

  scroll($event: { start: number; end: number }): void {
  // Code here
  }
  `;

  basicDisabledExample: string = `
  <go-select
    [control]="select"
    [items]="items"
    label="Favorite Candy">
  </go-select>
  `;
  basicDisabledExample2: string = `
  ngOnInit(): void {
    items = [
      { value: 1, name: 'Reeses' },
      { value: 2, name: 'Mints' }
    ];
    this.select.disable();
    // Use this.select.enable(); to re-enable the select component.
  }
  `;
  basicDisabledExample3: string = `
  select: new FormControl({
    value: '',
    disabled: true
  });
  `;

  constructor(
    private goModalService: GoModalService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Select';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-select';
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

    this.options$ = concat(
      of([]),
      this.itemInput.pipe(
        debounceTime(600), // Delay user input
        map((input: string) => [input])
      )
    );
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
  scrollToEnd(): void {
    this.selectData = [...this.selectData, ...this.newSelectData];
  }

  scroll($event: { start: number; end: number }): void {
    console.log($event);
  }
}
