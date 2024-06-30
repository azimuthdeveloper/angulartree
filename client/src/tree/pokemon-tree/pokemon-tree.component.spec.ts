import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTreeComponent } from './pokemon-tree.component';

describe('PokemonTreeComponent', () => {
  let component: PokemonTreeComponent;
  let fixture: ComponentFixture<PokemonTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
