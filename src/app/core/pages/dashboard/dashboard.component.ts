import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SubjectService } from '../../../shared/services/subject/subject.service';
import { QuizesUiComponent } from '../../../shared/componets/ui/quizes-ui/quizes-ui.component';
import {
  Subjectres,
  SubjectRes,
} from '../../../shared/services/subject/interfaces/subjectRes/subject-res';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [QuizesUiComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  allsubject!: Subjectres[];
  totalRecords: number = 0;
  rows: number = 6;
  first: number = 0;

  constructor(private _subjectService: SubjectService) {}

  getallsubject(numpage: number, limit: number) {
    this._subjectService.getall_subject(numpage, limit).subscribe({
      next: (res) => {
        if ('subjects' in res) {
          this.allsubject = res.subjects;
          this.totalRecords = res.totalPages * this.rows;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getallsubject(this.first / this.rows + 1, this.rows);
  }
}
