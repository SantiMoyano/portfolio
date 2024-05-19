import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienciaLaboral = [
    {
      titulo: 'Desarrollo Web para Distribuidora',
      puesto: 'Freelance',
      fecha: 'Abril 2024 - Actualidad · 2 meses',
      descripcion:
        'Creación de una página web usando React y APIs con Spring Boot, desplegada en Google Cloud. Conexión a MySQL, gestión de roles con Spring Security y JWT.',
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
        'SharePoint',
        'GitHub',
        'Microsoft Flow',
        'Microsoft Teams',
      ],
    },
    {
      titulo: 'Diseñador de Páginas Web',
      puesto: 'Bahitres - Web Bahía Blanca',
      fecha: 'Agosto 2019 - Enero 2020 · 6 meses',
      descripcion:
        'Creación de páginas web con WordPress en conjunto con un desarrollador.',
      herramientas: ['WordPress', 'Diseño web'],
    },
  ];

  constructor() {}
}
