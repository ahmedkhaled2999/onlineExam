import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { ButtonComponent } from '../../../../core/componets/button/button.component';
import { Exam, ExampsRes } from '../../../interface/examsResponse/examps-res';

import { ModalQuizesComponent } from '../../../../core/pages/modal-quizes/modal-quizes.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-exams-ui',
  standalone: true,
  imports: [ButtonComponent, ModalQuizesComponent],
  templateUrl: './exams-ui.component.html',
  styleUrl: './exams-ui.component.css',
})
export class ExamsUiComponent {
  @Input() EXAMS!: Exam[];
  _platform = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this._platform)) {
      const showState = localStorage.getItem('show');
      const idEqustio = localStorage.getItem('idEqustio') || '';
      if (showState === 'true') {
        this.showExams = true;
        this.idEqustion = idEqustio;
      }
    }
  }
  showExams: boolean = false;
  idEqustion!: string;

  changeshow(id: string) {
    this.idEqustion = id;
    this.showExams = true;
    if (isPlatformBrowser(this._platform)) {
      localStorage.setItem('show', 'true');
      localStorage.setItem('idEqustio', id);
    }
  }
}
