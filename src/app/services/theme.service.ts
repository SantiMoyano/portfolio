import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private colorSubject = new BehaviorSubject<string>('rgb(193, 255, 37)');
  color$ = this.colorSubject.asObservable();

  private colors: string[] = [
    'rgb(193, 255, 37)',
    'rgb(255, 54, 54)',
    'rgb(0, 238, 255)',
    'rgb(251, 255, 0)',
  ];
  private currentIndex = 0;

  constructor() {}

  toggleColor() {
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    const newColor = this.colors[this.currentIndex];
    this.colorSubject.next(newColor);
  }
}
