import { Component, OnInit } from '@angular/core';
import { GoConfigService } from 'projects/go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration-docs',
  templateUrl: './configuration-docs.component.html'
})
export class ConfigurationDocsComponent implements OnInit {
  pageTitle: string = 'Configuration';
  inputControl: FormControl = new FormControl(false);
  toggleControl: FormControl = new FormControl(false);
  colorControl: FormControl = new FormControl('');
  colorOptions: any = [
    { label: 'Default', value: undefined },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' }
  ];

  updateColorExample: string = `
  updateColor(): void {
    this.goConfigService.setBrandColor(this.color);
  }
  `;

  inputExample: string = `
  <go-input
    [control]="formControl"
    label="Brand Color">
  </go-input>
  `;

  buttonExample: string = `
  <go-button (handleClick)="updateColor()">
    Update Branding Color
  </go-button>
  `;

  toggleExample: string = `
  <go-switch-toggle
    [control]="toggleControl"
    label="Header Branding">
  </go-switch-toggle>
  `;

  toggleHeaderEnabledExample: string = `
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(() => {
      this.goConfigService.toggleHeaderBrandingEnabled();
    });
  }
  `;

  colorEx: string = `
  colorControl: FormControl = new FormControl('');

  constructor(private goConfigService: GoConfigService) { }

  this.colorControl.valueChanges.subscribe(i => {
    this.goConfigService.overrideMenuColor(i);
  });
  `;

  constructor(private goConfigService: GoConfigService) { }

  ngOnInit(): void {
    this.inputControl = new FormControl(this.goConfigService.config.getValue().brandColor);
    this.toggleControl.valueChanges.subscribe(() => {
      this.goConfigService.toggleHeaderBrandingEnabled();
    });

    this.colorControl.valueChanges.subscribe(i => {
      this.goConfigService.overrideMenuColor(i);
    });
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.inputControl.value);
  }
}
