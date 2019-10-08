import { Component, OnInit } from '@angular/core';
import { GoConfigService } from 'projects/go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration-docs',
  templateUrl: './configuration-docs.component.html'
})
export class ConfigurationDocsComponent implements OnInit {
  pageTitle: string = 'Configuration';
  formControl: FormControl;

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

  constructor(private goConfigService: GoConfigService) { }

  ngOnInit(): void {
    this.formControl = new FormControl(this.goConfigService.config.getValue().brandColor);
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.formControl.value);
  }
}
