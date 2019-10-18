import { Component, OnInit } from '@angular/core';
import { GoConfigService } from 'projects/go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration-docs',
  templateUrl: './configuration-docs.component.html'
})
export class ConfigurationDocsComponent implements OnInit {
  pageTitle: string = 'Configuration';
  inputControl: FormControl;
  toggleControl: FormControl = new FormControl(false);

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
  toggleControl: FormControl = new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(() => {
      this.goConfigService.toggleHeaderBrandingEnabled();
    });
  }
  `;

  constructor(private goConfigService: GoConfigService) { }

  ngOnInit(): void {
    this.inputControl = new FormControl(this.goConfigService.config.getValue().brandColor);
    this.toggleControl.valueChanges.subscribe(() => {
      this.goConfigService.toggleHeaderBrandingEnabled();
    });
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.inputControl.value);
  }
}
