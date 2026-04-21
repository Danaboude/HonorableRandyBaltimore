import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-news',
  imports: [ScrollAnimateDirective],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {

}
