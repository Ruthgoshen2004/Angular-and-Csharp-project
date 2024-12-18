import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCpaComponent } from './delete-cpa.component';

describe('DeleteCpaComponent', () => {
  let component: DeleteCpaComponent;
  let fixture: ComponentFixture<DeleteCpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
