import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit {
  pageTitle: String;

  basicExample: string = `
  <h1 class="go-heading-1">Heading 1</h1>
  <h2 class="go-heading-2">Heading 2</h2>
  <h3 class="go-heading-3">Heading 3</h3>
  <h4 class="go-heading-4">Heading 4</h4>
  <h5 class="go-heading-5">Heading 5</h5>
  <h6 class="go-heading-6">Heading 6</h6>
  <p class="go-body-copy">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet repudiandae deserunt voluptas reprehenderit tempora!
    Eveniet sunt itaque molestias obcaecati, quasi sit quod deleniti iure incidunt repellat ipsam nam dolore!
  </p>
  `;

  noMarginExample: string = `
  <h1 class="go-heading-3 go-heading--no-margin">
    Heading without margin
  </h1>
  <h2 class="go-heading-4 go-heading--no-margin">
    Heading without margin
  </h2>
  <p class="go-body-copy go-body-copy--no-margin">
    Body copy without margin
  </p>
  `;

  ngOnInit(): void {
    this.pageTitle = 'Typography';
  }
}
