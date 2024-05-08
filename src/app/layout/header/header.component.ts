import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Sobre mí', link: '/about' },
    { label: 'Experiencia', link: '/experience' },
    { label: 'Proyectos', link: '/projects' },
    { label: 'Contacto', link: '/contact' },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  constructor() {}
}
