import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
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
    this.currentIndex = (this.currentIndex + 1) % this.imageSrcs.length;
  }

  constructor() {}
}
