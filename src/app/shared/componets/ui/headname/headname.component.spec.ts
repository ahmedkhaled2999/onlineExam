import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnameComponent } from './headname.component';

describe('HeadnameComponent', () => {
  let component: HeadnameComponent;
  let fixture: ComponentFixture<HeadnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
