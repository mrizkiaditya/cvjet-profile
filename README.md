# CV Jet - Company Profile

Modern and responsive company profile website built for CV Jet, showcasing their services, products, clients, and more.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

## 🌟 Features

- **Modern UI/UX**: Clean and professional design using Tailwind CSS.
- **Fully Responsive**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Component-Based Architecture**: Modular sections including:
  - `Hero`: Engaging introductory section.
  - `About`: Company background and mission.
  - `Features` & `Services`: Details of what CV Jet offers.
  - `Products`: Showcase of company products.
  - `Clients`: Portfolio of trusted clients.
- **Interactive Elements**: Includes a `FloatingWhatsApp` button for instant customer support.
- **Optimized Performance**: Fast loading and building powered by Vite and React Compiler.

## 📁 Project Structure

```text
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable React components (Navbar, Hero, Footer, etc.)
├── App.tsx         # Main application component routing/layout
├── main.tsx        # Entry point
└── index.css       # Global styles and Tailwind configuration
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if applicable) or download the source code.
2. Navigate to the project directory:
   ```bash
   cd cvjet-companyprofile
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built assets will be located in the `dist` folder, ready to be deployed.

### Linting

To check for code formatting and linting errors:

```bash
npm run lint
```

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to find and fix problems.
