import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

export type CodeBlockLanguage =
  | 'html'
  | 'typescript'
  | 'scss'
  | 'css'
  | 'bash'
  | 'json'
  | 'xml';

/**
 * Docs-only wrapper around `ngx-highlightjs` that forces an explicit language
 * so `highlight.js` auto-detection cannot misclassify short HTML fragments
 * (e.g. rendering `for`, `type` or `switch` as keywords/built-ins).
 *
 * Usage:
 *   <app-code-block [content]="snippet" language="html"></app-code-block>
 */
@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<code [highlight]="content" [language]="language" [class]="'language-' + language + (codeClass ? ' ' + codeClass : '')"></code>`,
  styles: [':host{display:block}']
})
export class CodeBlockComponent {
  @Input() content = '';
  @Input() language: CodeBlockLanguage = 'html';
  @Input() codeClass = '';
}
