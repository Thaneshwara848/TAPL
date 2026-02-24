import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitMessage = '';

      try {
        // EmailJS configuration
        const serviceId = 'service_mx8yd3n'; // Replace with your EmailJS service ID
        const templateId = 'your_template_id'; // Replace with your EmailJS template ID
        const publicKey = 'your_public_key'; // Replace with your EmailJS public key

        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          to_email: 'mvsst333@gmail.com'
        };

        // Uncomment when EmailJS is installed
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        // For now, simulate email sending (remove when EmailJS is configured)
        await this.simulateEmailSend();

        this.isSubmitted = true;
        this.submitMessage = 'Thank you for contacting us! We will get back to you soon.';
        this.contactForm.reset();

      } catch (error) {
        console.error('Email sending failed:', error);
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again later.';
      } finally {
        this.isLoading = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  private async simulateEmailSend(): Promise<void> {
    // Simulate network delay
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  get f() {
    return this.contactForm.controls;
  }
}