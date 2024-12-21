import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationloadingComponent } from './animationloading.component';

describe('AnimationloadingComponent', () => {
  let component: AnimationloadingComponent;
  let fixture: ComponentFixture<AnimationloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationloadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimationloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
