import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SearchComponent } from "../search/search.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimationloadingComponent } from "../../../shared/componets/ui/animationloading/animationloading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, AnimationloadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
