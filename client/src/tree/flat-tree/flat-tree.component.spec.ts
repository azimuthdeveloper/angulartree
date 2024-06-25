import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatTreeComponent } from './flat-tree.component';

describe('FlatTreeComponent', () => {
  let component: FlatTreeComponent;
  let fixture: ComponentFixture<FlatTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
