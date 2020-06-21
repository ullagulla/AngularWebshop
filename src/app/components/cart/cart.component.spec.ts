import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/services/mockhttpservice';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ DatePipe, { provide: HttpService, useClass: MockHttpService } ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
