import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSnippetComponent } from './value-snippet.component';

describe('ValueSnippetComponent', () => {
  let component: ValueSnippetComponent;
  let fixture: ComponentFixture<ValueSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
