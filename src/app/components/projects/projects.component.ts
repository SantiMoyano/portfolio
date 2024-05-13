import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Nutrivida',
      shortDesc: 'Página diseñada para distribuidora de productos naturales',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1225465663741624392/1239352634834554890/image.png?ex=66429c96&is=66414b16&hm=f95f62013849ad4ddd3a5260485ccfbd7a2a8b5257b70d04138c7e553ddf6efb&',
      tools: [
        'React',
        'Tailwind',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'Google Cloud',
        'VPS Ubuntu',
      ],
    },
  ];

  constructor() {}
}
