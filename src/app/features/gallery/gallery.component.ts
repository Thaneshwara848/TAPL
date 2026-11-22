import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent {
  selectedCategory: string | null = null;

  images: GalleryImage[] = [
   // Placeholder for personal images from LinkedIn
    {
      src: '/assets/gallery/Thanesh.png',
      alt: 'Thanesh profile photo',
      title: 'Director',
      category: 'Team'
    },
    
    {
      src: 'assets/gallery/HnM.png',
      alt: 'H&M logo',
      title: 'H&M pvt ltd',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/BY.png',
      alt: 'BY logo',
      title: 'Blue Yondar',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Capg.png',
      alt: 'Capgemini logo',
      title: 'Capgemini Mumbai',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/CapgChennai.png',
      alt: 'Capgemini Chennai logo',
      title: 'Capgemini Chennai',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/CAPGPune.png',
      alt: 'Capgemini Pune logo',
      title: 'Capgemini Pune',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Altimetrik.png',
      alt: 'Altimetrik logo',
      title: 'Altimetrik',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Hexaware.png',
      alt: 'Hexaware logo',
      title: 'Hexaware',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/DayForce.png',
      alt: 'Dayforce logo',
      title: 'Dayforce',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/SLK.png',
      alt: 'SLK logo',
      title: 'SLK',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/HnM.png',
      alt: 'H&M logo',
      title: 'H&M',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/IBM.png',
      alt: 'IBM logo',
      title: 'IBM Banglore',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/jpm.png',
      alt: 'JP Morgan logo',
      title: 'JP Morgan Banglore',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/LnT.png',
      alt: 'L&T logo',
      title: 'L&T Chennai',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/MinTree.png',
      alt: 'MindTree logo',
      title: 'MindTree',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Oxford.png',
      alt: 'Oxford logo',
      title: 'Oxford Instute of Technology',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Prodapt.png',
      alt: 'Prodapt logo',
      title: 'Prodapt pvt ltd',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/tcs.png',
      alt: 'TCS logo',
      title: 'TCS',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/techM.png',
      alt: 'Tech Mahindra logo',
      title: 'Tech Mahindra',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/UHG.png',
      alt: 'UnitedHealth Group logo',
      title: 'UnitedHealth Group',
      category: 'Corporate Clients'
    },
    {
      src: 'assets/gallery/Wipro.png',
      alt: 'Wipro logo',
      title: 'Wipro',
      category: 'Corporate Clients'
    }
   
  ];

  get filteredImages() {
    if (!this.selectedCategory) {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  get categories() {
    return [...new Set(this.images.map(img => img.category))];
  }
}