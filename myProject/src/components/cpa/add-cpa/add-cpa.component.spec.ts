import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCpaComponent } from './add-cpa.component';

describe('AddCpaComponent', () => {
  let component: AddCpaComponent;
  let fixture: ComponentFixture<AddCpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
