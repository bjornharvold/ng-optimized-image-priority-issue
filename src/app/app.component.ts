import { NgOptimizedImage } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
