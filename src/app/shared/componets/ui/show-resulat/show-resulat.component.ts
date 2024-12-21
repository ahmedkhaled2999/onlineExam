import {
  Component,
  inject,
  Input,
  input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Root2 } from '../../../interface/quiztion/answers/answers';
import { ButtonComponent } from '../../../../core/componets/button/button.component';
import { AnswerPersonComponent } from '../answer-person/answer-person.component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-show-resulat',
  standalone: true,
  imports: [ButtonComponent, AnswerPersonComponent],
  templateUrl: './show-resulat.component.html',
  styleUrl: './show-resulat.component.css',
})
export class ShowResulatComponent {
  rout = inject(Router);
  @Input() correctAnswers: Root2[] = [];
  @Input() wrongAnswers: Root2[] = [];
  _platform = inject(PLATFORM_ID);
  reusult: boolean = true;
  ngOnInit(): void {
    if (isPlatformBrowser(this._platform)) {
      const reus = localStorage.getItem('reusult');
      if (reus === 'false') {
        this.reusult = false;
      }
    }
  }

  changeshow() {
    this.reusult = false;
    if (isPlatformBrowser(this._platform)) {
      localStorage.setItem('reusult', 'true');
    }
  }

  get totalAnswers(): number {
    return this.correctAnswers.length + this.wrongAnswers.length;
  }

  // Calculate percentage of correct answers
  get correctPercentage(): number {
    return this.totalAnswers > 0
      ? Math.round((this.correctAnswers.length / this.totalAnswers) * 100)
      : 0;
  }

  // Calculate percentage of wrong answers
  get wrongPercentage(): number {
    return 100 - this.correctPercentage;
  }

  // Calculate stroke-dashoffset for SVG (circle circumference = 314)
  get correctOffset(): number {
    return 314 - (314 * this.correctPercentage) / 100;
  }

  get wrongOffset(): number {
    return 314 - (314 * this.wrongPercentage) / 100;
  }

  backtohome() {
    if (isPlatformBrowser(this._platform)) {
      localStorage.removeItem('idEqustio');
      localStorage.removeItem('quizState');
      localStorage.removeItem('show');
      localStorage.removeItem('show-maodal');
    }

    this.rout.navigate(['/home']);
  }
}
