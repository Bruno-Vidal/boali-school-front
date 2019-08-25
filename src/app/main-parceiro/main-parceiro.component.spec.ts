import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainParceiroComponent } from './main-parceiro.component';

describe('MainParceiroComponent', () => {
  let component: MainParceiroComponent;
  let fixture: ComponentFixture<MainParceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainParceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
