# School Landing Page Template

A production-ready, reusable Next.js school landing page template designed for deployment to multiple schools with minimal code changes.

## 🎯 Features

- **Static Export Mode**: Fully static HTML output for hosting on Vercel or Cloudflare Pages
- **Dual Theme Support**: Light (/) and Dark (/dark) themes via URL routing
- **Configuration-Driven**: All content managed through a single JSON file
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **WhatsApp Integration**: Direct enrollment CTAs via WhatsApp
- **Zero Dependencies**: No backend, database, or authentication required
- **SEO-Friendly**: Optimized for search engines with proper meta tags
- **High Performance**: Minimal JavaScript, fast load times

## 📸 Screenshots

### Light Theme
![Light Theme](https://github.com/user-attachments/assets/fa254958-19eb-4f60-92e2-8ae015881999)

### Dark Theme
![Dark Theme](https://github.com/user-attachments/assets/fdd3d45e-dce6-406f-8f86-734d97aef506)

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit:
- `http://localhost:3000` - Light theme
- `http://localhost:3000/dark` - Dark theme

### Build & Deploy

```bash
npm run build
```

The static site will be generated in the `/out` directory, ready for deployment.

## 📁 Project Structure

```
├── app/
│   ├── [[...theme]]/          # Dynamic route for theme switching
│   │   └── page.tsx            # Main page component
│   └── layout.tsx              # Root layout
├── components/                 # Reusable React components
│   ├── About.tsx
│   ├── Academics.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Facilities.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
├── content/
│   └── school.json            # School configuration file
├── lib/
│   └── schoolData.ts          # Data loading utilities
├── public/images/             # School images
└── styles/
    └── globals.css            # Global styles with CSS variables
```

## 🏫 Customizing for Your School

To deploy this template for a new school, you only need to:

### 1. Update School Configuration

Edit `/content/school.json`:

```json
{
  "name": "Your School Name",
  "motto": "Your School Motto",
  "description": "Brief description of your school",
  "contact": {
    "phone": "+234XXXXXXXXXX",
    "email": "info@yourschool.com",
    "address": "Your school address",
    "whatsapp": "234XXXXXXXXXX"
  },
  "theme": {
    "primary": "#16a34a",
    "secondary": "#14532d",
    "accent": "#f59e0b",
    "backgroundLight": "#ffffff",
    "backgroundDark": "#0f172a",
    "textLight": "#1f2937",
    "textDark": "#e5e7eb"
  }
}
```

### 2. Replace Images

Replace images in `/public/images/`:

- `logo.svg` - School logo
- `hero.svg` - Hero section background
- `about.svg` - About section image
- `lab.svg` - Science lab image
- `library.svg` - Library image
- `computer-lab.svg` - Computer lab image
- `sports.svg` - Sports facilities image
- `gallery-1.svg` through `gallery-6.svg` - Campus gallery images

### 3. Update Academic Programs

Edit the `sections.academics.programs` array in `school.json` to match your school's programs.

### 4. Update Facilities

Edit the `images.facilities` array in `school.json` to list your school's facilities.

## 🎨 Theme System

The template uses CSS variables for theming:

- `--color-primary`: Primary brand color
- `--color-secondary`: Secondary brand color
- `--color-accent`: Accent color for highlights
- `--color-bg`: Background color (switches based on theme)
- `--color-text`: Text color (switches based on theme)

Theme is determined by the URL:
- `/` → Light theme
- `/dark` → Dark theme

## 📱 WhatsApp Integration

The "Enroll Now" and "Chat on WhatsApp" buttons automatically link to WhatsApp using the number specified in `contact.whatsapp` field.

Format: Country code + number without + or spaces (e.g., `2348012345678`)

## 🔧 Technical Stack

- **Next.js 16.1.6**: React framework with App Router
- **React 19**: Latest React version
- **TypeScript**: Type-safe development
- **Tailwind CSS 3**: Utility-first CSS framework
- **Static Export**: No server runtime required

## 📦 Deployment

### Vercel

```bash
npm run build
```

Deploy the `/out` directory to Vercel or connect your GitHub repository for automatic deployments.

### Cloudflare Pages

```bash
npm run build
```

Upload the `/out` directory to Cloudflare Pages or connect your repository.

### Other Static Hosts

Any static hosting service that can serve HTML files will work. Simply upload the contents of the `/out` directory after building.

## 🧑‍💻 Development Workflow

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Customize content**: Edit `content/school.json`
4. **Replace images**: Update files in `public/images/`
5. **Test locally**: `npm run dev`
6. **Build**: `npm run build`
7. **Deploy**: Upload `/out` directory

## 🚫 What NOT to Change

To maintain the reusability of this template:

- Don't modify component files unless fixing bugs
- Don't add client-side state management
- Don't add database connections
- Don't add API routes
- Keep all customization in `school.json` and image files

## 📄 License

ISC

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for educational institutions**
