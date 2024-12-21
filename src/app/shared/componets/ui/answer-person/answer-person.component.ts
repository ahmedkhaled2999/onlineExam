import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Root2 } from '../../../interface/quiztion/answers/answers';
import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { Router } from '@angular/router';
@Component({
  selector: 'app-answer-person',

  standalone: true,
  imports: [NgClass, VirtualScrollerModule],
  templateUrl: './answer-person.component.html',
  styleUrl: './answer-person.component.css',
})
export class AnswerPersonComponent {
  @Input() wornganswer!: Root2[];
  Roouter = inject(Router);
  _platform = inject(PLATFORM_ID);

  items!: string[];

  backtohome() {
    if (isPlatformBrowser(this._platform)) {
      localStorage.removeItem('idEqustio');
      localStorage.removeItem('quizState');
      localStorage.removeItem('show');
      localStorage.removeItem('show-maodal');
    }

    this.Roouter.navigate(['/home']);
  }
}
