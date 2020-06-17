import { Component, OnInit } from '@angular/core';
import { GoInfiniteScrollService } from 'projects/go-lib/src/lib/directives/go-infinite-scroll/go-infinite-scroll.service';
import { DataSource, GoInfiniteScrollConfig } from 'projects/go-lib/src/lib/directives/go-infinite-scroll/go-infinite-scroll-config.model';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-infinite-scroll-docs',
  styleUrls: ['./infinite-scroll-docs.component.scss'],
  templateUrl: './infinite-scroll-docs.component.html'
})
export class InfiniteScrollDocsComponent implements OnInit {
  pageTitle: string = 'Infinite Scroll';
  items: number[] = Array.from(Array(1000).keys());
  loading: boolean = false;
  scrollItems: number[];
  config: GoInfiniteScrollConfig = new GoInfiniteScrollConfig({
    dataMode: DataSource.client,
    identifier: 'infinite_scroll'
  });

  serverItems: number[];
  serverConfig: GoInfiniteScrollConfig = new GoInfiniteScrollConfig({
    identifier: 'server'
  });

  constructor(
    private infiniteScrollService: GoInfiniteScrollService
  ) { }

  componentBindings: string = `
    @Output() scrolledToBottom: EventEmitter<null> = new EventEmitter();
    @Input() config: GoInfiniteScrollConfig = new GoInfiniteScrollConfig();
  `;

  configClass: string = `
  class GoInfiniteScrollConfig {
    dataMode: DataSource = DataSource.server;
    identifier: string;
    index: number = 0;
    perPage: number = 20;
  }
  `;

  basicExample_html: string = `
  <div
    goInfiniteScroll
    [config]="config"
    class="scrollable go-container">
    <go-card
      *ngFor="let item of scrollItems"
      class="go-column go-column--50">
      <ng-container go-card-header>
        {{ item }}
      </ng-container>
    </go-card>
  </div>
  `;

  basicExample_ts: string = `
  items: number[] = Array.from(Array(1000).keys());
  scrollItems: number[];
  config: GoInfiniteScrollConfig = new GoInfiniteScrollConfig({
    dataMode: DataSource.client,
    identifier: 'infinite_scroll'
  });

  ngOnInit(): void {
    this.infiniteScrollService.setData(this.config, this.items);
    this.scrollItems = this.infiniteScrollService.data[this.config.identifier];
  }
  `;

  serverExample_html: string = `
  <div
    goInfiniteScroll
    [config]="serverConfig"
    (scrolledToBottom)="loadMoreItems()"
    class="scrollable go-container">
    <go-card
      *ngFor="let item of serverItems"
      class="go-column go-column--50">
      <ng-container go-card-header>
        {{ item }}
      </ng-container>
    </go-card>
    <go-loader *ngIf="loading"></go-loader>
  </div>
  `;

  serverExample_ts: string = `
  items: number[] = Array.from(Array(1000).keys());
  serverItems: number[];
  serverConfig: GoInfiniteScrollConfig = new GoInfiniteScrollConfig({
    identifier: 'server'
  });

  ngOnInit(): void {
    this.infiniteScrollService.setInitialData(this.serverConfig, this.items.slice(0, 20));
    this.serverItems = this.infiniteScrollService.data[this.serverConfig.identifier];
  }

  loadMoreItems(): void {
    this.loading = true;
    setTimeout(() => {
      this.infiniteScrollService.LoadMoreData(this.serverConfig, this.items.slice(this.serverConfig.index, this.serverConfig.index + 20));
      this.serverItems = this.infiniteScrollService.data[this.serverConfig.identifier];
      this.loading = false;
    }, 3000);
  }
  `;


  ngOnInit(): void {
    // Client
    this.infiniteScrollService.setInitialData(this.config, this.items);
    this.scrollItems = this.infiniteScrollService.data[this.config.identifier];

    // Server
    this.infiniteScrollService.setInitialData(this.serverConfig, this.items.slice(0, 20));
    this.serverItems = this.infiniteScrollService.data[this.serverConfig.identifier];
  }

  loadMoreItems(): void {
    this.loading = true;
    setTimeout(() => {
      this.infiniteScrollService.LoadMoreData(this.serverConfig, this.items.slice(this.serverConfig.index, this.serverConfig.index + 20));
      this.loading = false;
    }, 3000);
  }
}
