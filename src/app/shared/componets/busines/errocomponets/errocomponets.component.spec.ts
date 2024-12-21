import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrocomponetsComponent } from './errocomponets.component';

describe('ErrocomponetsComponent', () => {
  let component: ErrocomponetsComponent;
  let fixture: ComponentFixture<ErrocomponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrocomponetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrocomponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
