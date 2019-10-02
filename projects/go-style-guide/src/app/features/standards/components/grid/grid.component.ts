import { Component } from '@angular/core';

@Component({
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  pageTitle: string = 'Grid System';

  basicExample25: string = `
  <section class="go-container">
    <div class="go-column go-column--25">1 of 4</div>
    <div class="go-column go-column--25">2 of 4</div>
    <div class="go-column go-column--25">3 of 4</div>
    <div class="go-column go-column--25">4 of 4</div>
  </section>
  `;

  basicExample33: string = `
  <section class="go-container">
    <div class="go-column go-column--33">1 of 3</div>
    <div class="go-column go-column--33">2 of 3</div>
    <div class="go-column go-column--33">3 of 3</div>
  </section>
  `;

  basicExample50: string = `
  <section class="go-container">
    <div class="go-column go-column--50">1 of 2</div>
    <div class="go-column go-column--50">2 of 2</div>
  </section>
  `;

  offsetExample66: string = `
  <section class="go-container">
    <div class="go-column go-column--33">33.33333%</div>
    <div class="go-column go-column--66">66.66667%</div>
  </section>
  `;

  offsetExample75: string = `
  <section class="go-container">
    <div class="go-column go-column--75">75%</div>
    <div class="go-column go-column--25">25%</div>
  </section>
  `;

  advancedExampleMixed: string = `
  <section class="go-container">
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--50">50%</div>
    <div class="go-column go-column--66">66%</div>
    <div class="go-column go-column--33">33%</div>
    <div class="go-column go-column--100">100%</div>
  </section>
  `;

  nestedExample: string = `
  <section class="go-container example-grid">
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--75 go-column--no-padding">
      <p class="go-body-copy">75%</p>
      <div class="go-container">
        <div class="go-column go-column--50">50%</div>
        <div class="go-column go-column--50">50%</div>
      </div>
    </div>
  </section>
  `;

  collapseColumn: string = `
  <section class="go-container">
    <div class="go-column">Column 1</div>
    <div class="go-column go-column--collapse">Column 2</div>
  </section>
  `;

  alignCenterContainer: string = `
  <section class="go-container go-container--align-center">
    <div class="go-column go-column--50">Column 1</div>
    <div class="go-column go-column--50">Column 2</div>
  </section>
  `;
}
