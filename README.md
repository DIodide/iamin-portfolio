# Ibraheem Amin - Portfolio

My second portfolio website, showcasing my projects, certifications, and potentially tech blog as I navigate being both a first-generation college student and a CS student.

**🌐 Live Site:** [https://ibraheemamin.dev](https://ibraheemamin.dev)

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

### Responsive & Modern

- Fully responsive design across all devices
- Dark/light theme toggle with system preference detection
- Smooth animations and micro-interactions using Framer Motion
- Gradient backgrounds and glassmorphism effects

### Project Showcase

- **EVAL Gaming Platform** - E-sports recruiting platform with Next.js, tRPC, Prisma
- **MindBridge** - AI-powered learning roadmap generator (HackPrinceton project)
- **BlockWarriors AI** - Minecraft tournament management system with Java plugins
- **3D Wildfire Visualization** - NASA MODIS data visualization using Maya and MEL scripting
- **ZBot** - Discord guild management bot with 30+ commands and real-time statistics

### Certifications

- Interactive certification browser with category filtering
- 25+ professional certifications and achievements
- Real-time certification data with verification links
- Expandable groups with smooth animations

## Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Shadcn/ui** - Modern component library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Reproduction

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DIodide/iamin-portfolio.git
   cd iamin-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
iamin-portfolio/
├── public/
│   └── images/
│       ├── certifications/        # Certification badges and certificates
│       └── projects/              # Project screenshots organized by project
│           ├── eval/              # EVAL Gaming Platform images
│           ├── mindbridge/        # MindBridge project images
│           ├── blockwarriors/     # BlockWarriors AI images
│           ├── wildfire/          # Wildfire visualization images
│           └── zbot/              # ZBot Discord bot images
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles and animations
│   │   ├── layout.tsx            # Root layout with theme provider
│   │   └── page.tsx              # Main portfolio page
│   ├── components/
│   │   ├── ui/                   # Shadcn/ui components
│   │   ├── certifications.tsx    # Certification display logic
│   │   ├── theme-provider.tsx    # Dark/light theme management
│   │   └── theme-toggle.tsx      # Theme switcher component
│   └── lib/
│       ├── utils.ts              # Utility functions
│       └── terminal.ts           # Terminal interaction logic
├── certifications.json           # Certification data
└── components.json               # Shadcn/ui configuration
```

## Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## Deployment

This portfolio is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Configure custom domain (optional)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DIodide/iamin-portfolio)

## Contributing

While this is a personal portfolio, I welcome suggestions and feedback:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Contact

**Ibraheem Amin**

### Computer Science Student at Princeton University

- 🔗 Personal: [ibraheem.amin2@gmail.com](mailto:ibraheem.amin2@gmail.com)
- 🔗 Academic: [ibraheem@princeton.edu](mailto:ibraheem@princeton.edu)
- 🔗 LinkedIn: [/in/ibraheem-amin](https://linkedin.com/in/ibraheem-amin)
- 🔗 GitHub: [@DIodide](https://github.com/DIodide)
- 🌐 Portfolio: [ibraheemamin.dev](https://ibraheemamin.dev)

---

<div align="center">
  <sub>Built with ❤️ using Next.js and TypeScript</sub>
</div>
