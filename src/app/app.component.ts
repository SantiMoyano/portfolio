import { Component, OnInit } from '@angular/core';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fontColor?: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.color$.subscribe((color) => {
      document.documentElement.style.setProperty(
        '--custom-color-toggleable',
        color
      );
    });
  }
}
