import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSnippetComponent } from './patient-snippet.component';

describe('PatientSnippetComponent', () => {
  let component: PatientSnippetComponent;
  let fixture: ComponentFixture<PatientSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
