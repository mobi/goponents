import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';
import { Component } from '@angular/core';

@Component({
    imports: [DemoImportsModule],
    templateUrl: './form-control-docs.component.html',
    selector: 'app-form-control-docs',
})
export class FormControlDocsComponent {
  basicFormControl: string = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';

  @Component({
    imports: [DemoImportsModule],
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.css']
  })
  export class NameEditorComponent {
    controlName = new FormControl();
  }
  `;
}
