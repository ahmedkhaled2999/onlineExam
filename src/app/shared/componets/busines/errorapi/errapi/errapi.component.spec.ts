import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrapiComponent } from './errapi.component';

describe('ErrapiComponent', () => {
  let component: ErrapiComponent;
  let fixture: ComponentFixture<ErrapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
