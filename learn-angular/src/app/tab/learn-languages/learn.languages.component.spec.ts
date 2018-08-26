import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn.LanguagesComponent } from './learn.languages.component';

describe('Learn.LanguagesComponent', () => {
  let component: Learn.LanguagesComponent;
  let fixture: ComponentFixture<Learn.LanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn.LanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn.LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
