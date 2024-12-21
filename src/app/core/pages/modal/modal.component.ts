import { Component, computed, effect } from '@angular/core';
import { ButtonComponent } from '../../componets/button/button.component';
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  showmadal: () => boolean = () => true;
  constructor(
    private _SidebarComponent: SidebarComponent,
    private _callAPIService: callAPIService
  ) {
    effect(() => {
      this.showmadal = computed(() => this._SidebarComponent.show());
    });
  }

  no() {
    this._SidebarComponent.show.set(false);
  }
  yes() {
    this._callAPIService.logout();
  }
}
