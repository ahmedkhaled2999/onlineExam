import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../componets/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchKeyy = new EventEmitter<string>();

  searchValue: string = ''; // Property to hold the input value

  searchout(value: string) {
    this.searchKeyy.emit(value); // Emit the current value
  }
}
