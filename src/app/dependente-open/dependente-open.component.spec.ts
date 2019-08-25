import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenteOpenComponent } from './dependente-open.component';

describe('DependenteOpenComponent', () => {
  let component: DependenteOpenComponent;
  let fixture: ComponentFixture<DependenteOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependenteOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenteOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
