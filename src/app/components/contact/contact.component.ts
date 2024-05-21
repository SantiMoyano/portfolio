import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private themeService: ThemeService) {}

  imageSrcs = [
    '../../../assets/pika.gif',
    '../../../assets/gary.gif',
    '../../../assets/deltarune-kris.gif',
    '../../../assets/Penguin_Frames_dancing.gif',
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
