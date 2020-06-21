import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProductpageComponent } from './productpage.component';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/services/mockhttpservice';

describe('ProductpageComponent', () => {
  let component: ProductpageComponent;
  let fixture: ComponentFixture<ProductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpageComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ DatePipe, { provide: HttpService, useClass: MockHttpService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', () => {
    expect(component.movieProducts.length).toBeGreaterThan(0);
    expect(component.movieProducts[0].name).toContain('Star');
  });
});
