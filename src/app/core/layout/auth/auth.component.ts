import { Component, computed, effect, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexComponent } from '../../../shared/componets/ui/flex/flex.component';
import { NavlayoutComponent } from '../navlayout/navlayout.component';
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, FlexComponent, NavlayoutComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent  {
 
}
