# Sri Vilvanadha Ishwarar Temple Website

Official website for Sri Vilvanadha Ishwarar Temple, located in Kilvillivalam, Vandavasi, Thiruvannamalai District.

## 🕉️ About

This is a modern, responsive website built for Sri Vilvanadha Ishwarar Temple to provide information about the temple, its deities, services, events, and to facilitate communication with devotees.

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Complete meta tags for better search engine visibility
- **Performance**: Optimized images and code splitting for fast load times
- **Contact Form**: Functional contact form with validation
- **Error Handling**: Error boundary for graceful error recovery
- **TypeScript**: Full type safety throughout the application

## 🛠️ Technology Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📁 Project Structure

```
vilvanadhan.org/
├── public/
│   └── images/              # Static images
│       ├── background.png
│       ├── Shiva.png
│       ├── Parvati.png
│       ├── Ganesha.png
│       └── Kartikeya.png
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Page sections (Hero, Services, etc.)
│   │   ├── ui/              # Reusable UI components
│   │   └── ErrorBoundary.tsx
│   ├── constants/
│   │   └── content.ts       # Content data and configurations
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useForm.ts
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── .env.example             # Environment variables template
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── eslint.config.js         # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vilvanadhan.org
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your actual values
```

4. Add required images to `public/images/`:
   - background.png
   - Shiva.png
   - Parvati.png
   - Ganesha.png
   - Kartikeya.png

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |

## 🎨 Customization

### Content

Update content in `src/constants/content.ts`:
- Temple information
- Services
- Events
- Testimonials
- Blog posts
- Social media links

### Styling

The project uses Tailwind CSS. Modify colors and styles in:
- `src/App.css` - Global styles
- Component files - Component-specific styles

### Environment Variables

Configure in `.env`:
- `VITE_API_URL` - API endpoint
- `VITE_CONTACT_FORM_ENDPOINT` - Contact form submission URL
- `VITE_GA_TRACKING_ID` - Google Analytics ID
- Social media URLs
- Email service configuration

## 🔧 Configuration Files

### TypeScript Configuration
- `tsconfig.json` - Main TypeScript config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node-specific config

### Code Quality
- `.prettierrc` - Prettier formatting rules
- `eslint.config.js` - ESLint rules with TypeScript and React support

## 🌐 Deployment

### Build Optimization
The production build is optimized with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

### Hosting Options
- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or use Git integration
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist` folder contents

### Environment Setup
Ensure environment variables are configured in your hosting platform.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

The website follows WCAG 2.1 Level AA guidelines:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 🔒 Security

- Input validation on forms
- XSS protection
- CSRF tokens (to be implemented with backend)
- Environment variable protection

## 📄 License

This project is proprietary and belongs to Sri Vilvanadha Ishwarar Temple.

## 👥 Contributors

- Temple Management Team
- Web Development Team

## 📞 Contact

**Sri Vilvanadha Ishwarar Temple**
- Address: Kilvillivalam to Thunayambattu Road, Kilvillivalam Village, Vandavasi, Thiruvannamalai District - 604 408
- Phone: +91 75581 10667
- Email: shreevilvanathaeeshwararcharit@gmail.com
- Website: https://vilvanadhan.org

## 🙏 Acknowledgments

- Temple priests and staff
- Devotee community
- Open source contributors

---

**Om Namah Shivaya** 🕉️
