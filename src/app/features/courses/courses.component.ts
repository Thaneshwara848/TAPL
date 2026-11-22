import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Course {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: 'Java Full Stack with Angular or React',
      description: 'Learn Java full-stack development with your choice of Angular or React.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Complete Java Stack with Microservices',
      description: 'Build Java applications and explore a complete stack with microservices.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Python Stack',
      description: 'Develop practical skills across the Python development stack.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'MEAN Stack',
      description: 'Build full-stack web applications with MongoDB, Express, Angular, and Node.js.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'MERN Stack',
      description: 'Build full-stack web applications with MongoDB, Express, React, and Node.js.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'AI, ML & Generative AI',
      description: 'Explore artificial intelligence, machine learning, and generative AI concepts.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Agentic AI',
      description: 'Learn the concepts behind AI agents and agentic workflows.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cloud Computing',
      description: 'Explore cloud platforms, services, and application deployment fundamentals.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'DevOps',
      description: 'Learn DevOps principles, CI/CD workflows, and automation fundamentals.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];
}