import { Component } from '@angular/core';
import * as pkg from '../../../../../../../../../go-lib/package.json';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-docs',
  templateUrl: './editor-docs.component.html'
})
export class EditorDocsComponent {
  form: FormGroup = new FormGroup({
    description: new FormControl(),
    description2: new FormControl(),
    description3: new FormControl()
  });

  tinyMce_dep: string = pkg.peerDependencies['tinymce'];
  tinyMceNg_dep: string = pkg.peerDependencies['@tinymce/tinymce-angular'];

  tinyMceCommand: string = `npm install --save tinymce@${this.tinyMce_dep} @tinymce/tinymce-angular@${this.tinyMceNg_dep}`;

  angularJson: string = `
  "assets": [
    { "glob": "**/*", "input": "node_modules/tinymce", "output": "/assets/tinymce/" },
    { "glob": "**/*", "input": "node_modules/@tangoe/goponents/styles/tinymce", "output": "/assets/tinymce/" }
  ]
  `;

  goConfigService: string = `
  constructor(private goConfigService: GoConfigService) {
    const config: GoConfigInterface = {
      tinyMceConfig: {
        baseUrl: '/assets/tinymce' // this will vary depending on how/where your Angular app is deployed
      }
    };

    this.goConfigService.setConfig(config);
  }
  `;

  goConfigServiceLang: string = `
  const lang: string = 'en'; // probably determined by locale or user preference depending on the app
  const config: GoConfigInterface = {
    tinyMceConfig: {
      baseUrl: '/assets/tinymce'
      language: lang,
      languageUrl: \`/javascripts/tinymce/langs/\${lang}.js\`
    }
  };
  `;

  moduleImport: string = `
  import { CommonModule } from '@angular/common';
  import { NgModule } from '@angular/core';
  import { GoEditorModule, TINYMCE_SCRIPT_SRC } from '@tangoe/goponents';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      GoEditorModule
    ],
    providers: [
      {
        provide: TINYMCE_SCRIPT_SRC,
        useValue: '/assets/tinymce/tinymce.min.js' // this will vary depending on how/where your Angular app is deployed
      }
    ]
  })
  export class YourModule { }
  `;

  htmlExample: string = `
  <go-editor
    [formControl]="form.get('nameOfControl')">
  </go-editor>
  `;

  htmlThemeExample: string = `
  <go-editor
    label="Description"
    theme="dark"
    [formControl]="form.get('description')">
  </go-editor>
  `;

  htmlBasicExample: string = `
  <go-editor
    label="Description"
    [formControl]="form.get('description')">
  </go-editor>
  `;

  toolbarPluginsDefaults: string = `
  @Input() plugins: string = 'autolink lists link paste';
  @Input() toolbar: string = 'undo redo | formatselect | bold | bullist numlist | removeformat';
  `;

  toolBarPluginsOverride: string = `
  <go-editor
    label="Description"
    plugins="autolink lists link paste hr"
    toolbar="undo redo | formatselect | bold | bullist numlist | hr | removeformat"
    [formControl]="form.get('description')">
  </go-editor>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Editor';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-editor';
  }

  handleSubmit(): void {
    console.log(this.form.value);
  }
}
