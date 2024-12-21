import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { AnimationloadingComponent } from "./shared/componets/ui/animationloading/animationloading.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, AnimationloadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'onlineexam';
}
