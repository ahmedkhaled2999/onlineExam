import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LayerComponent } from "../layer/layer.component";

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [LayerComponent],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  // animations:[
  //   trigger('fade', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('500ms', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('500ms', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
  
})
export class AnimationComponent {

  count: number = 3;
  showGo: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  ngOnInit() {
    const countdown = setInterval(() => {
      if (this.count > 1) {
        this.count--;
      } else {
        this.showGo = true;
        this.newItemEvent.emit(this.showGo)
        clearInterval(countdown);
      }
    }, 1000);
  }

}
