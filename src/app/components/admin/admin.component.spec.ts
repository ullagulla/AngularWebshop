import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/services/mockhttpservice';
import { HttpClientModule } from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ AdminComponent, DatePipe, { provide: HttpService, useClass: MockHttpService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
