# Abençoado Redes - Corporate Website

Corporate website for Abençoado Redes, a company specialized in safety net installation for residential and commercial properties.

## 📋 About the Project

The project consists of a complete website with React frontend and NestJS backend, developed to showcase the company's services and enable direct client contact through an integrated form.

### Main Features

- **Corporate Website**: Company presentation, services and work gallery
- **Contact Form**: Integrated email messaging system
- **Image Gallery**: Showcase of completed projects
- **Responsive Design**: Adaptable interface for desktop and mobile
- **REST API**: Backend for contact form processing

## 🏗️ Project Architecture

```
ABENCOADOREDES-PROJECT/
├── frontend/          # React Application (Vite + TypeScript)
├── backend/           # NestJS API (Node.js + TypeScript)
└── README.md         # Main documentation
```

## 🚀 Frontend

### Technologies Used

- **React 19** - User interface library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **React Router DOM** - Routing
- **CSS Modules** - Modular styling
- **React Slick** - Image carousel
- **React Icons** - Icons

### Frontend Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── Cards/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── ScrollToTop/
│   ├── pages/         # Application pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── layouts/       # Base layouts
│   ├── assets/        # Images, icons and videos
│   └── styles/        # Global styles
├── public/            # Static files
└── package.json
```

### Available Pages

- **Home** (`/`) - Landing page with hero video and presentation
- **About** (`/about`) - Company history and mission
- **Services** (`/services`) - Details of offered services
- **Gallery** (`/gallery`) - Portfolio of completed projects
- **Contact** (`/contact`) - Contact form and information

### How to Run the Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

The frontend will be available at `http://localhost:5173`

## 🔧 Backend

### Technologies Used

- **NestJS** - Node.js framework
- **TypeScript** - Static typing
- **Nodemailer** - Email sending
- **Class Validator** - Data validation
- **Class Transformer** - Data transformation

### Backend Structure

```
backend/
├── src/
│   ├── contact/           # Contact module
│   │   ├── dto/          # Data Transfer Objects
│   │   ├── contact.controller.ts
│   │   ├── contact.service.ts
│   │   └── contact.module.ts
│   ├── app.module.ts     # Main module
│   └── main.ts          # Entry point
├── test/                # E2E tests
└── package.json
```

### API Endpoints

#### POST `/contact`
Sends contact message via email.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (Brazilian format)",
  "mensagem": "string"
}
```

### Backend Configuration

Copy `.env.example` to `.env` in the `backend/` folder and configure your environment variables.

### How to Run the Backend

```bash
cd backend
pnpm install
pnpm start:dev
```

The backend will be available at `http://localhost:3000`

## 🔄 Frontend/Backend Integration

The frontend communicates with the backend through REST API for:

1. **Form Submission**: Contact messages are processed by the backend
2. **Validation**: Data is validated on the backend using Class Validator
3. **Notifications**: Emails are sent automatically via Nodemailer

### CORS

The backend is configured to accept requests from the frontend in development (`http://localhost:4173`).

## 📦 Available Scripts

### Frontend
- `pnpm dev` - Start development server
- `pnpm build` - Generate production build
- `pnpm preview` - Preview production build
- `pnpm lint` - Run linting

### Backend
- `pnpm start:dev` - Start server in development mode
- `pnpm start:prod` - Start server in production mode
- `pnpm build` - Compile the project
- `pnpm test` - Run tests
- `pnpm lint` - Run linting

## 🚀 Deploy

### Frontend
The frontend can be deployed on any static hosting service:
- Vercel
- Netlify
- GitHub Pages

### Backend
The backend can be deployed on:
- Heroku
- Railway
- DigitalOcean
- AWS

**Important**: Remember to configure environment variables in the deployment service.

## 🎨 Design and UX

- **Responsive Design**: Adaptable interface for all devices
- **Performance**: Optimized with Vite and lazy loading
- **Accessibility**: Components follow accessibility standards
- **SEO**: Structure optimized for search engines

## 📞 Contact

For questions about the project, contact us through the website form or through Abençoado Redes' official channels.

---

**Developed with ❤️ for Abençoado Redes**