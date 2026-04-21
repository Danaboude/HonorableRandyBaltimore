import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { News } from './components/news/news';
import { Election } from './components/election/election';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, News, Election, Footer],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Honorable-Randy-Baltimore';
}
