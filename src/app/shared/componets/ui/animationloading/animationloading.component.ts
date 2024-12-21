import { Component, computed, effect } from '@angular/core';
import { LoadingService } from '../../../services/loading/loading.service';
import { LayerComponent } from "../layer/layer.component";

@Component({
  selector: 'app-animationloading',
  standalone: true,
  imports: [LayerComponent],
  templateUrl: './animationloading.component.html',
  styleUrl: './animationloading.component.css',
})
export class AnimationloadingComponent {
  load: () => boolean = () => false;
  constructor(private _loadingService: LoadingService) {
    effect(() => {
      this.load = computed(() => this._loadingService.loadingSubject());
    });
  }
}
