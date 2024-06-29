import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTreeComponent } from './nested-tree.component';

describe('NestedTreeComponent', () => {
  let component: NestedTreeComponent;
  let fixture: ComponentFixture<NestedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
