import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams/exams.service';
import { ExamsUiComponent } from '../../../../shared/componets/ui/exams-ui/exams-ui.component';
import {
  Exam,
  ExampsRes,
} from '../../../../shared/interface/examsResponse/examps-res';

@Component({
  selector: 'app-all-exams',
  standalone: true,
  imports: [ExamsUiComponent],
  templateUrl: './all-exams.component.html',
  styleUrl: './all-exams.component.css',
})
export class AllExamsComponent implements OnInit {
  constructor(private _examsService: ExamsService) {}
  exams!: Exam[];

  getallexms() {
    this._examsService.getallExams().subscribe({
      next: (data) => {
        console.log(data);
        this.exams = data.exams;
        console.log(this.exams);
      },
      error: (error) => {
        console.error('Error retrieving exams:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getallexms();
  }
}
