import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'task';
}
