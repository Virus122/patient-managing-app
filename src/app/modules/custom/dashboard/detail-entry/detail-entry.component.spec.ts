import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEntryComponent } from './detail-entry.component';

describe('DetailEntryComponent', () => {
  let component: DetailEntryComponent;
  let fixture: ComponentFixture<DetailEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
