import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-textauth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './textauth.component.html',
  styleUrl: './textauth.component.css'
})
export class TextauthComponent {
@Input()   text:string ='Recover Password ?'
@Input()   page!:string 
@Input()   style:string ='flex justify-content-end mt-3'
}
