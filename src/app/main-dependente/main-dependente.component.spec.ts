import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDependenteComponent } from './main-dependente.component';

describe('MainDependenteComponent', () => {
  let component: MainDependenteComponent;
  let fixture: ComponentFixture<MainDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
