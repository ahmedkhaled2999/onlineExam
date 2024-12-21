import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Drop } from '../../../shared/dropdown/drop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navlayout',
  standalone: true,
  imports: [DropdownModule,FormsModule,RouterLink],
  templateUrl: './navlayout.component.html',
  styleUrl: './navlayout.component.css'
})
export class NavlayoutComponent {


 
}
