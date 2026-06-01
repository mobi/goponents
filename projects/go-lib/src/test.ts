// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js';
import 'zone.js/testing';
import { enableProdMode } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

enableProdMode();

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
