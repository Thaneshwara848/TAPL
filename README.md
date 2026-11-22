# UpSkillWithThanesh

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Contact Enquiry Emails

The contact form uses EmailJS to send each enquiry to `Thaneshwara555@gmail.com`.
Email notifications are not active until EmailJS is configured:

1. Create an account at [EmailJS](https://www.emailjs.com/), connect an email service, and create a template.
2. Set the template recipient to `{{to_email}}`, reply-to to `{{reply_to}}`, and subject to `New training enquiry: {{subject}}`.
3. Use this template body so the full enquiry arrives in the email:

   ```text
   New training enquiry

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Training topic / subject: {{subject}}
   Submitted: {{sent_at}}

   Message:
   {{message}}
   ```

4. In `src/app/features/contact/contact.component.ts`, set `EMAILJS_SERVICE_ID`,
   `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` to the values from EmailJS.
   The public key is intended for browser use; never put a private key in frontend code.
5. Build and deploy the site, then submit a test enquiry and verify the email arrives.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
