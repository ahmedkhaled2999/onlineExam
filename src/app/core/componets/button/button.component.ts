import { Component, computed, effect, Input } from '@angular/core';
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  looding: () => boolean = () => false;
  calapi: () => boolean = () => false;
  @Input() Adisabled!: boolean ;

  constructor(private _callAPIService: callAPIService) {
    effect(() => {
      this.looding = computed(() => this._callAPIService.looding());
      this.calapi = computed(() => this._callAPIService.callapi());
    });
  }

  @Input() text: string = 'add';
  @Input() style: string = 'w-full';
  @Input() style_button : boolean=true 

}
