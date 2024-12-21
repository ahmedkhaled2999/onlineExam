import { Component, computed, effect, inject } from '@angular/core';
import { ExamsUiComponent } from '../exams-ui/exams-ui.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-qution',
  standalone: true,
  imports: [],
  templateUrl: './not-found-qution.component.html',
  styleUrl: './not-found-qution.component.css',
})
export class NotFoundQutionComponent {

ROUTER =inject(Router)

  back() {
    localStorage.removeItem('idEqustio');
    localStorage.removeItem('quizState');
    localStorage.removeItem('show');
    localStorage.removeItem('show-maodal');
    // this._ExamsUiComponent.showExams.set(false)
    this.ROUTER.navigate(['/home'])
  }
}
