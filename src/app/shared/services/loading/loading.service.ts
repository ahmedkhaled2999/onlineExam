import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject: WritableSignal<boolean> = signal(false);

  show(duration: number = 2000) {
    // Default duration is 2000ms (2 seconds)
    this.loadingSubject.set(true);
  }

  hide() {
    this.loadingSubject.set(false);
  }
}
