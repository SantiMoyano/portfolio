import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private themeService: ThemeService) {}

  imageSrcs = [
    '../../../assets/deltarune-kris.gif',
    '../../../assets/Penguin_Frames_dancing.gif',
    '../../../assets/gary.gif',
    '../../../assets/pika.gif',
  ];
  currentIndex = 0;

  get currentImageSrc() {
    return this.imageSrcs[this.currentIndex];
  }

  toggleImage() {
    this.themeService.toggleColor();
    this.currentIndex = (this.currentIndex + 1) % this.imageSrcs.length;
  }
}
