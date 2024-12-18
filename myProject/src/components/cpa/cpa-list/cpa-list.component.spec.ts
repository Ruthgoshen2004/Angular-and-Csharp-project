import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaListComponent } from './cpa-list.component';

describe('CpaListComponent', () => {
  let component: CpaListComponent;
  let fixture: ComponentFixture<CpaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
