import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCpaComponent } from './update-cpa.component';

describe('UpdateCpaComponent', () => {
  let component: UpdateCpaComponent;
  let fixture: ComponentFixture<UpdateCpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
