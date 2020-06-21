import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/services/mockhttpservice';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [ HomeComponent, { provide: HttpService, useClass: MockHttpService }, DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', () => {
    expect(component.movieProducts.length).toBeGreaterThan(0);
    expect(component.movieProducts[0].name).toContain("Harry");
  });

});
