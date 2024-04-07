import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyWorkComponent } from './components/my-work/my-work.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, MyWorkComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
