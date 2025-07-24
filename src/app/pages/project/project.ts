import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../pipe/safe-url-pipe';

@Component({
  selector: 'app-project',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular, Bootstrap, Spring Boot, Postgres. I spent 3 days to finish it.',
      tech: ['Angular', 'Bootstrap', 'Spring Boot', 'Postgres', 'Netlify', 'Rendor', 'Docker'],
      link: 'https://github.com/phaiecobyte/portfolio-ui',
      video: 'https://www.youtube.com/embed/r2LpOUwca94?list=RDGMEMYH9CUrFO7CfLJpaD7UR85w'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular, Bootstrap, Spring Boot, Postgres. I spent 3 days to finish it.',
      tech: ['Angular', 'Bootstrap', 'Spring Boot', 'Postgres', 'Netlify', 'Rendor', 'Docker'],
      link: 'https://github.com/phaiecobyte/portfolio-ui',
      video: 'https://www.youtube.com/embed/r2LpOUwca94?list=RDGMEMYH9CUrFO7CfLJpaD7UR85w'
    }
    
  ];
}