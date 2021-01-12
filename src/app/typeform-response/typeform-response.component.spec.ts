import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeformResponseComponent } from './typeform-response.component';

describe('TypeformResponseComponent', () => {
  let component: TypeformResponseComponent;
  let fixture: ComponentFixture<TypeformResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeformResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeformResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
