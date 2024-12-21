import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamsService } from '../../../../shared/services/exams/exams.service';
import { ExamsUiComponent } from '../../../../shared/componets/ui/exams-ui/exams-ui.component';
import { Exam } from '../../../../shared/interface/examsResponse/examps-res';
import { NotFoundQutionComponent } from '../../../../shared/componets/ui/not-found-qution/not-found-qution.component';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [ExamsUiComponent, NotFoundQutionComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css',
})
export class ExamsComponent implements OnInit {
  id!: string;
  exams!: Exam[];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _examsService: ExamsService
  ) {
    _activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      },
    });
  }
  getsubjectexms() {
    this._examsService.getexamsubject(this.id).subscribe({
      next: (data) => {
        if ('exams' in data) {
          this.exams = data.exams;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {
    this.getsubjectexms();
  }
}
