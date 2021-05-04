import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVeiculoComponent } from './list-veiculo.component';

describe('ListVeiculoComponent', () => {
  let component: ListVeiculoComponent;
  let fixture: ComponentFixture<ListVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
