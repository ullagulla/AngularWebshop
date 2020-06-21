import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, DatePipe]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
