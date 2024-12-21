import { Component, computed, effect, Input, input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-errocomponets',
  standalone: true,
  imports: [],
  templateUrl: './errocomponets.component.html',
  styleUrl: './errocomponets.component.css',
})
export class ErrocomponetsComponent {
 
  @Input() inputname!: string;
  @Input() formGroup!: FormGroup;
}
