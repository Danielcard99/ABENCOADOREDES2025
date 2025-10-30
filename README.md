# Abençoado Redes - Corporate Website

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-11.0.1-E0234E?logo=nestjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30.0.0-C21325?logo=jest&logoColor=white)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)
![Tests](https://img.shields.io/badge/Tests-15%20passed-brightgreen)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Status](https://img.shields.io/badge/Status-Production-success)

Corporate website for Abençoado Redes, a company specialized in safety net installation for residential and commercial properties.

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Architecture](#️-project-architecture)
- [Frontend](#-frontend)
- [Backend](#-backend)
- [Frontend/Backend Integration](#-frontendbackend-integration)
- [Available Scripts](#-available-scripts)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Development Workflow](#-development-workflow)
- [License](#-license)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [Additional Resources](#-additional-resources)

## 📋 About the Project

The project consists of a complete website with React frontend and NestJS backend, developed to showcase the company's services and enable direct client contact through an integrated form.

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** >= 18.0.0 (tested with 18.x, 20.x, 22.x)
- **pnpm** >= 8.0.0 (tested with 8.15.0+)
- **SendGrid Account** (for email functionality)

### Installing pnpm

```bash
npm install -g pnpm
```

### Tested Versions

- Node.js: 18.19.0, 20.11.0, 22.10.7
- pnpm: 8.15.0, 9.0.0+
- TypeScript: 5.7.3 (backend), 5.9.3 (frontend)

### Main Features

- **Corporate Website**: Company presentation, services and work gallery
- **Contact Form**: Integrated email messaging system
- **Image Gallery**: Showcase of completed projects
- **Responsive Design**: Adaptable interface for desktop and mobile
- **REST API**: Backend for contact form processing

## ⚡ Quick Start

**Clone and run the complete project:**

```bash
# Clone the repository
git clone <repository-url>
cd ABENCOADOREDES-PROJECT

# Setup Backend
cd backend
cp .env.example .env  # Configure your environment variables
pnpm install
pnpm start:dev

# Setup Frontend (new terminal)
cd ../frontend
cp .env.example .env  # Configure VITE_API_URL
pnpm install
pnpm dev
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

**Production URLs:**
- **Live Website**: https://abencoadoredes-2025.vercel.app
- **Company Domain**: https://abencoadoredes.com.br

## 🏗️ Project Architecture

```
ABENCOADOREDES-PROJECT/
├── frontend/          # React Application (Vite + TypeScript)
├── backend/           # NestJS API (Node.js + TypeScript)
└── README.md         # Main documentation
```

## 🚀 Frontend

### Technologies Used

- **React 19.1.1** - User interface library
- **TypeScript 5.9.3** - Static typing
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.3** - Routing
- **CSS Modules** - Modular styling
- **React Slick 0.31.0** - Image carousel
- **React Icons 5.5.0** - Icons
- **Fontsource** - Web fonts (Montserrat & Roboto)
- **AOS 2.3.4** - Animate On Scroll library

### Development Dependencies

- **ESLint 9.36.0** - Code linting
- **TypeScript ESLint 8.45.0** - TypeScript linting rules
- **Vite React Plugin 5.0.4** - React support for Vite

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

- **NestJS 11.0.1** - Node.js framework
- **TypeScript 5.7.3** - Static typing
- **SendGrid 8.1.6** - Email sending service
- **Class Validator 0.14.2** - Data validation
- **Class Transformer 0.5.1** - Data transformation
- **@nestjs/config 4.0.2** - Configuration management

### Development Dependencies

- **Jest 30.0.0** - Testing framework
- **ESLint 9.18.0** - Code linting
- **Prettier 3.4.2** - Code formatting
- **Supertest 7.0.0** - HTTP testing

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

**Response (Success):**
```json
{
  "message": "Mensagem enviada com sucesso"
}
```

**Response (Error):**
```json
{
  "statusCode": 400,
  "message": ["Validation error messages"],
  "error": "Bad Request"
}
```

### Data Validation Rules

- **name**: Required string, non-empty
- **email**: Required valid email format
- **phone**: Required Brazilian phone format (validated with class-validator)
- **message**: Required string, minimum 10 characters

### Custom Error Messages

- Nome é obrigatório / deve ser um texto
- E-mail é obrigatório / formato inválido
- Telefone é obrigatório / formato brasileiro inválido
- Mensagem é obrigatória / mínimo 10 caracteres

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

### CORS Configuration

The backend is configured to accept requests from:

- **Development**: `http://localhost:5173`
- **Production**: 
  - `https://abencoadoredes-2025.vercel.app`
  - `https://abencoadoredes.com.br`
  - `https://www.abencoadoredes.com.br`
  - `http://abencoadoredes.com.br`
  - `http://www.abencoadoredes.com.br`

### Global Validation Pipe

The backend uses global validation with:
- **whitelist**: true (removes non-whitelisted properties)
- **forbidNonWhitelisted**: true (throws error for extra properties)
- **transform**: true (automatically transforms payloads)
- **Custom exception factory**: Returns user-friendly error messages

## 📦 Available Scripts

### Frontend

- `pnpm dev` - Start development server (http://localhost:5173)
- `pnpm build` - Generate production build (TypeScript compilation + Vite build)
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint for code quality

### Backend

- `pnpm start` - Start server in production mode
- `pnpm start:dev` - Start server in development mode with watch
- `pnpm start:debug` - Start server in debug mode with watch
- `pnpm start:prod` - Start compiled server in production
- `pnpm build` - Compile TypeScript to JavaScript
- `pnpm test` - Run unit tests with Jest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:cov` - Run tests with coverage report
- `pnpm test:debug` - Run tests in debug mode
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## 🧪 Testing

### Backend Testing

**Unit Tests:**
```bash
cd backend
pnpm test
```

**Watch Mode:**
```bash
pnpm test:watch
```

**Coverage Report:**
```bash
pnpm test:cov
```

**E2E Tests:**
```bash
pnpm test:e2e
```

### Test Structure

```
backend/src/
├── contact/
│   ├── contact.controller.spec.ts
│   ├── contact.service.spec.ts
│   └── contact.module.spec.ts
├── app.module.spec.ts
backend/test/
└── jest-e2e.json
```

### Test Coverage

**Current Coverage:**
- **Statements**: 100%
- **Branches**: 83.33%
- **Functions**: 100%
- **Lines**: 100%

**Test Results:**
- **Test Suites**: 4 passed, 4 total
- **Tests**: 15 passed, 15 total
- **Execution Time**: ~1.3s

### Coverage Configuration

- **Coverage Directory**: `backend/coverage/`
- **Ignored Files**: `main.ts`
- **Formats**: HTML, LCOV, JSON
- **Threshold**: Not configured (can be added)

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
