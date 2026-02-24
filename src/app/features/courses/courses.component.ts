import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  description: string;
  duration: string;
  image: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class CoursesComponent {
  courses: Course[] = [
    {
      title: 'Full Stack Web Development',
      description: 'Master front-end and back-end technologies to build complete web applications.',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Learn data analysis, visualization, and machine learning algorithms.',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cloud Computing with AWS',
      description: 'Comprehensive training on Amazon Web Services and cloud architecture.',
      duration: '4 months',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications.',
      duration: '5 months',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Learn essential cybersecurity concepts and best practices.',
      duration: '3 months',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'DevOps Engineering',
      description: 'Master CI/CD pipelines, containerization, and infrastructure automation.',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];
}