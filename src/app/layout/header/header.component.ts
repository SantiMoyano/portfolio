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
    { label: 'Inicio', link: '/' },
    { label: 'Experiencia', link: '/experience' },
    { label: 'Proyectos', link: '/projects' },
    { label: 'Contacto', link: '/contact' },
  ];

  isMenuOpen = false;
  selectedItemIndex: number = -1;

  selectItem(index: number) {
    this.selectedItemIndex = index;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  constructor() {}
}
