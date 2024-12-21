import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headname',
  standalone: true,
  imports: [],
  templateUrl: './headname.component.html',
  styleUrl: './headname.component.css'
})
export class HeadnameComponent {
@Input()  text!: string
}
