import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TrainingClient {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  activeTrainingSlide = 0;

  trainingClients: TrainingClient[] = [
    { name: 'Infosys', logo: 'https://www.google.com/s2/favicons?domain=infosys.com&sz=256' },
    { name: 'L&T', logo: '/assets/gallery/LnT.png' },
    { name: 'EY', logo: 'https://www.google.com/s2/favicons?domain=ey.com&sz=256' },
    { name: 'ExxonMobil', logo: 'https://www.google.com/s2/favicons?domain=exxonmobil.com&sz=256' },
    { name: 'TCS', logo: '/assets/gallery/tcs.png' },
    { name: 'FIS', logo: 'https://www.google.com/s2/favicons?domain=fisglobal.com&sz=256' },
    { name: 'Deloitte', logo: 'https://www.google.com/s2/favicons?domain=deloitte.com&sz=256' },
    { name: 'Cognizant', logo: 'https://www.google.com/s2/favicons?domain=cognizant.com&sz=256' },
    { name: 'Caterpillar', logo: 'https://www.google.com/s2/favicons?domain=caterpillar.com&sz=256' },
    { name: 'PwC', logo: 'https://www.google.com/s2/favicons?domain=pwc.com&sz=256' },
    { name: 'Siemens', logo: 'https://www.google.com/s2/favicons?domain=siemens.com&sz=256' },
    { name: 'Hexaware', logo: 'https://www.google.com/s2/favicons?domain=hexaware.com&sz=256' },
    { name: 'IBM', logo: '/assets/gallery/IBM.png' },
    { name: 'HSBC', logo: 'https://www.google.com/s2/favicons?domain=hsbc.com&sz=256' },
    { name: 'Samsung', logo: 'https://www.google.com/s2/favicons?domain=samsung.com&sz=256' },
    { name: 'JP Morgan', logo: '/assets/gallery/jpm.png' },
    { name: 'Tech Mahindra', logo: '/assets/gallery/techM.png' },
    { name: 'Wipro', logo: '/assets/gallery/Wipro.png' },
    { name: 'MKS', logo: 'https://www.google.com/s2/favicons?domain=mks.com&sz=256' },
    { name: 'Philips', logo: 'https://www.google.com/s2/favicons?domain=philips.com&sz=256' },
    { name: 'IGT IT Solution', logo: 'https://www.google.com/s2/favicons?domain=igti.com&sz=256' },
    { name: 'Niteo IT Solutions', logo: 'https://www.google.com/s2/favicons?domain=niteo.com&sz=256' },
    { name: 'SunSoft Technologies', logo: 'https://www.google.com/s2/favicons?domain=sunsofttech.com&sz=256' },
    { name: 'IDP', logo: 'https://www.google.com/s2/favicons?domain=idp.com&sz=256' },
    { name: 'CGI', logo: 'https://www.google.com/s2/favicons?domain=cgi.com&sz=256' },
    { name: 'Wonder Soft', logo: 'https://www.google.com/s2/favicons?domain=wondersoft.com&sz=256' },
    { name: 'Zee Channel', logo: 'https://www.google.com/s2/favicons?domain=zee.com&sz=256' },
    { name: 'Edureka', logo: 'https://www.google.com/s2/favicons?domain=edureka.co&sz=256' },
    { name: 'Simplilearn', logo: 'https://www.google.com/s2/favicons?domain=simplilearn.com&sz=256' }
  ];

  showTrainingSlide(index: number): void {
    this.activeTrainingSlide = index;
  }

  previousTrainingSlide(): void {
    this.activeTrainingSlide = (this.activeTrainingSlide + 1) % 2;
  }

  nextTrainingSlide(): void {
    this.activeTrainingSlide = (this.activeTrainingSlide + 1) % 2;
  }

  onLogoError(event: Event): void {
    if (event.target instanceof HTMLImageElement) {
      event.target.hidden = true;
    }
  }
}