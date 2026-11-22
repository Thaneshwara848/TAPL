import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_egs1igz';
const EMAILJS_TEMPLATE_ID = 'template_4br6njf';
const EMAILJS_PUBLIC_KEY = '3VzO0U98Gi28x0GD3';

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

  constructor(private fb: FormBuilder, private changeDetector: ChangeDetectorRef) {
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
      this.isSubmitted = false;
      this.submitMessage = '';

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        this.submitMessage = 'Email notifications are not configured yet. Please email me directly at Thaneshwara555@gmail.com.';
        return;
      }

      this.isLoading = true;

      try {
        const formValue = this.contactForm.getRawValue();
        const templateParams = {
          from_name: formValue.name,
          from_email: formValue.email,
          reply_to: formValue.email,
          phone: formValue.phone,
          subject: formValue.subject,
          message: formValue.message,
          to_email: 'Thaneshwara555@gmail.com',
          sent_at: new Date().toLocaleString()
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        this.isSubmitted = true;
        this.submitMessage = 'Your enquiry has been sent. Thank you! I’ll get back to you soon.';
        this.contactForm.reset();

      } catch (error) {
        console.error('Email sending failed:', error);
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again later.';
      } finally {
        this.isLoading = false;
        this.changeDetector.markForCheck();
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}