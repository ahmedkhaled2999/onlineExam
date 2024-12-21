import { Component, computed, effect } from '@angular/core';
import { callAPIService } from '../../../../services/CALLAPI/callapi.service';

@Component({
  selector: 'app-errapi',
  standalone: true,
  imports: [],
  templateUrl: './errapi.component.html',
  styleUrl: './errapi.component.css',
})
export class ErrapiComponent {
  errorMessages: () => string = () => '';
  constructor(private _callAPIService: callAPIService) {
    effect(() => {
      this.errorMessages = computed(() => this._callAPIService.errormassege());
    });
  }

 
}
