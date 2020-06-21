import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductpageComponent } from './one-product.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/services/mockhttpservice';
import { RouterTestingModule } from '@angular/router/testing';

describe('OneProductpageComponent', () => {
  let component: OneProductpageComponent;
  let fixture: ComponentFixture<OneProductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProductpageComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ OneProductpageComponent, DatePipe, { provide: HttpService, useClass: MockHttpService }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should add one movie to the cart", () => {
    component.cart = [];
    component.addToCart(component.currentMovie);

    expect(component.cart.length).toEqual(1);
})
});
