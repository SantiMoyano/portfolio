import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienciaLaboral = [
    {
      titulo: 'Servicios de TI',
      puesto: 'Eternet (Pasantía)',
      fecha: 'Enero 2023 - Abril 2023 · 4 meses',
      descripcion:
        'Trabajé en equipo para desarrollar aplicaciones y procesos low code útiles para la empresa.',
      herramientas: [
        'Microsoft PowerApps',
        'Sharepoint',
        'GitHub',
        'Microsoft Flow',
        'Microsoft Teams',
      ],
    },
    {
      titulo: 'Diseñador de páginas web',
      puesto: 'Bahitres',
      fecha: 'Agosto 2019 - Enero 2020 · 6 meses',
      descripcion:
        'Creación de páginas web con Wordpress, despliegue de páginas, conexión a base de datos, gestión de roles de usuario-administrador.',
      herramientas: ['Wordpress', 'Diseño web'],
    },
  ];

  constructor() {}
}
