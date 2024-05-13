import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienciaLaboral = [
    {
      titulo: 'Desarrollo de webs y APIs',
      puesto: 'Freelance',
      fecha: 'Octubre 2023 - Actualidad · 8 meses',
      descripcion:
        'Creación de páginas web con React, despliegue de páginas y APIs Spring Boot, conexión a base de datos MySQL, gestión de roles de usuario-administrador.',
      herramientas: [
        'React',
        'Tailwind',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MySQL',
        'VPS',
        'Docker',
      ],
    },
    {
      titulo: 'Servicios de TI',
      puesto: 'Eternet (Pasantía)',
      fecha: 'Enero 2023 - Abril 2023 · 4 meses',
      descripcion:
        'Trabajé en equipo para desarrollar aplicaciones y procesos low code útiles para el registro de licencias de los empleados de la empresa.',
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
      puesto: 'Bahitres - Web Bahía Blanca',
      fecha: 'Agosto 2019 - Enero 2020 · 6 meses',
      descripcion: 'Creación de páginas web con Wordpress bajo tutela.',
      herramientas: ['Wordpress', 'Diseño web'],
    },
  ];

  constructor() {}
}
