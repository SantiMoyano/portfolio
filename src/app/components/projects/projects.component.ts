import { Component, OnInit } from '@angular/core';

import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Nutrivida',
      shortDesc:
        'Página diseñada para una distribuidora nacional de productos naturales.',
      imageUrl: '../../../assets/nutrivida.webp',
      tools: [
        'React',
        'Tailwind',
        'Spring Boot',
        'JWT',
        'MySQL',
        'Google Cloud',
      ],
      website: 'https://nutrivida.com.ar',
      github: '',
    },
    {
      title: 'Blocky',
      shortDesc:
        'App para ayudarme a gestionar proyectos dividiéndolos en tareas más pequeñas.',
      imageUrl: '../../../assets/blocky.webp',
      tools: [
        'React',
        'Tailwind',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MySQL',
      ],
      website: '',
      github: 'https://github.com/SantiMoyano/blocky',
    },
    {
      title: 'Movie Review App',
      shortDesc:
        'App de películas para practicar autenticación, manejo de tokens y BBDD no relacionales.',
      imageUrl: '../../../assets/movie.webp',
      tools: [
        'React',
        'Bootstrap',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MongoDB',
      ],
      website: 'https://movie-review-app-six.vercel.app',
      github: 'https://github.com/SantiMoyano/movie-review-app',
    },
    {
      title: 'Players',
      shortDesc:
        'Web construida con el stack MERN para gestionar jugadores y etiquetas, con funcionalidad de usuarios.',
      imageUrl: '../../../assets/players.webp',
      tools: ['React', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
      website: 'https://players-flame.vercel.app',
      github: 'https://github.com/SantiMoyano/players',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
