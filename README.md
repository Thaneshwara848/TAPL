# Thanesh Academy Pvt Ltd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Email Configuration

The contact form sends emails using EmailJS. To set it up:

1. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Add your email service (Gmail, Outlook, etc.)

3. **Configure Email Template**:
   - Create a new email template with these variables:
     - `{{from_name}}` - Contact's name
     - `{{from_email}}` - Contact's email
     - `{{phone}}` - Contact's phone
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (thaneshwara555@gmail.com)

4. **Update Contact Component**:
   - Open `src/app/features/contact/contact.component.ts`
   - Replace the placeholder values:
     ```typescript
     const serviceId = 'your_actual_service_id';
     const templateId = 'your_actual_template_id';
     const publicKey = 'your_actual_public_key';
     ```
   - Uncomment the EmailJS import and send line

5. **Test the Contact Form**:
   - Submit the form to ensure emails are sent to thaneshwara555@gmail.com

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
