import { Component, Input } from '@angular/core';
import { Subjectres } from '../../../services/subject/interfaces/subjectRes/subject-res';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { PaginatorModule } from 'primeng/paginator';
import { DashboardComponent } from '../../../../core/pages/dashboard/dashboard.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../../../../core/pages/search/search.component';
import { FilterbynamePipe } from '../../../pipe/filterbyname.pipe';
import { ProfileinfoComponent } from "../../../../core/pages/profileinfo/profileinfo.component";

@Component({
  selector: 'app-quizes-ui',
  standalone: true,
  imports: [
    VirtualScrollerModule,
    PaginatorModule,
    RouterLink,
    SearchComponent,
    FilterbynamePipe,
    ProfileinfoComponent
],
  templateUrl: './quizes-ui.component.html',
  styleUrl: './quizes-ui.component.css',
})
export class QuizesUiComponent {
  constructor(private _dashboardComponent: DashboardComponent) {}
  searchkey: string = '';
  @Input() quizes!: Subjectres[];
  @Input() first!: number;
  @Input() rows!: number;
  @Input() togal!: number;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this._dashboardComponent.getallsubject(
      this.first / this.rows + 1,
      this.rows
    );
  }

  onSearch(searchValue: string) {
    this.searchkey = searchValue;
   
  }
}
