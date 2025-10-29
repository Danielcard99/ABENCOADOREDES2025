# Abençoado Redes - Corporate Website

Corporate website for Abençoado Redes, a company specialized in safety net installation for residential and commercial properties.

## 📋 About the Project

The project consists of a complete website with React frontend and NestJS backend, developed to showcase the company's services and enable direct client contact through an integrated form.

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **SendGrid Account** (for email functionality)

### Installing pnpm

```bash
npm install -g pnpm
```

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
- **Fontsource** - Web fonts (Montserrat & Roboto)
- **AOS** - Animate On Scroll library

### Frontend Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── Cards/
│   │   ├── ContactForm/
│   │   ├── Cta/
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
cp .env.example .env  # Configure environment variables
pnpm install
pnpm dev
```

The frontend will be available at `http://localhost:5173`

## 🔧 Backend

### Technologies Used

- **NestJS** - Node.js framework
- **TypeScript** - Static typing
- **SendGrid** - Email sending service
- **Class Validator** - Data validation
- **Class Transformer** - Data transformation
- **@nestjs/config** - Configuration management

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
  "message": "string (minimum 10 characters)"
}
```

### Environment Configuration

**Backend:**
Copy `.env.example` to `.env` in the `backend/` folder and configure:

- `SENDGRID_API_KEY`: Your SendGrid API key ([Get it here](https://app.sendgrid.com/settings/api_keys))
- `SENDGRID_FROM`: Verified sender email in SendGrid ([Verify here](https://app.sendgrid.com/settings/sender_auth))
- `CONTACT_RECEIVER`: Email to receive contact messages
- `PORT`: Server port (default: 3000)

**Frontend:**
Copy `.env.example` to `.env` in the `frontend/` folder and configure:

- `VITE_API_URL`: Backend API URL (http://localhost:3000 for development)

#### SendGrid Setup

1. Create a [SendGrid account](https://sendgrid.com/)
2. Generate an API key in Settings > API Keys
3. Verify your sender email in Settings > Sender Authentication
4. Add the API key and verified email to your `.env` file

### How to Run the Backend

```bash
cd backend
cp .env.example .env  # Configure environment variables
pnpm install
pnpm start:dev
```

The backend will be available at `http://localhost:3000`

## 🔄 Frontend/Backend Integration

The frontend communicates with the backend through REST API for:

1. **Form Submission**: Contact messages are processed by the backend
2. **Validation**: Data is validated on the backend using Class Validator
3. **Notifications**: Emails are sent automatically via SendGrid
4. **Environment Variables**: Frontend uses `VITE_API_URL` for API communication

### CORS

The backend is configured to accept requests from:

- Development: `http://localhost:5173`
- Production: `https://abencoadoredes-2025.vercel.app`

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
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:cov` - Run tests with coverage
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm lint` - Run linting
- `pnpm format` - Format code with Prettier

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

### Production URLs

- **Frontend**: https://abencoadoredes-2025.vercel.app
- **Backend**: Configure according to your hosting service

## 🎨 Design and UX

- **Responsive Design**: Adaptable interface for all devices
- **Performance**: Optimized with Vite and lazy loading
- **Accessibility**: Components follow accessibility standards
- **SEO**: Structure optimized for search engines
- **Animations**: AOS (Animate On Scroll) library for smooth animations

## 🔧 Troubleshooting

### Common Issues

**Frontend not connecting to backend:**

- Check if `VITE_API_URL` is correctly set in frontend `.env`
- Ensure backend is running on the correct port
- Verify CORS configuration in backend

**Email not sending:**

- Verify SendGrid API key is valid
- Check if sender email is verified in SendGrid
- Ensure `SENDGRID_FROM` matches verified email

**Build errors:**

- Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`
- Check Node.js version compatibility

## 🔄 Development Workflow

1. **Start Backend** (Terminal 1):

   ```bash
   cd backend
   pnpm start:dev
   ```

2. **Start Frontend** (Terminal 2):

   ```bash
   cd frontend
   pnpm dev
   ```

3. **Access Application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📄 License

This project is proprietary software developed for Abençoado Redes. All rights reserved.

## 🤝 Contributing

This is a private project. For any modifications or improvements, please contact the development team.

## 📞 Contact

For questions about the project, contact us through the website form or through Abençoado Redes' official channels.

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [SendGrid Documentation](https://docs.sendgrid.com/)

---

**Developed with ❤️ for Abençoado Redes**  
by [Daniel Cardoso](https://github.com/Danielcard99)
