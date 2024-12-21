import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './layer.component.html',
  styleUrl: './layer.component.css',
})
export class LayerComponent {
  @Input() style!: string;
}
