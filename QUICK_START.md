# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to: `http://localhost:5173`

---

## 🎨 Customization Guide

### Update Your Information

#### 1. **Hero Section** (`src/components/HeroSection.tsx`)
```typescript
// Line 83-84: Update your name
<span className="block">Your First Name</span>
<span className="block">Your Last Name</span>

// Line 98-99: Update your description
Full-Stack & Flutter Engineer based in Your City...

// Line 108-111: Update your stats
{ num: 'XX+', label: 'Your Metric' }
```

#### 2. **About Section** (`src/components/AboutSection.tsx`)
```typescript
// Lines 51-66: Update your bio paragraphs
// Lines 73-75: Update your achievement highlights
```

#### 3. **Skills Section** (`src/components/SkillsSection.tsx`)
```typescript
// Lines 6-41: Update your skills array
const skills = [
  {
    category: 'Your Category',
    tags: ['Skill1', 'Skill2', ...],
    featured: ['Skill1'] // Highlighted skills
  }
]
```

#### 4. **Projects Section** (`src/components/ProjectsSection.tsx`)
```typescript
// Lines 6-44: Update your projects
{
  tag: 'Project Type',
  year: '2026',
  title: 'Your Project Name',
  desc: 'Project description...',
  tech: ['Tech1', 'Tech2'],
  link: 'https://your-link.com',
  featured: true, // For full-width display
  image: '/assets/your-image.png'
}
```

#### 5. **Experience Section** (`src/components/ExperienceSection.tsx`)
```typescript
// Lines 6-59: Update your work experience
{
  period: 'Month Year — Present',
  type: 'Full-time · Location',
  role: 'Your Job Title',
  company: 'Company Name',
  bullets: [
    'Achievement 1...',
    'Achievement 2...'
  ]
}
```

#### 6. **Contact Section** (`src/components/ContactSection.tsx`)
```typescript
// Lines 6-25: Update your contact information
{
  icon: Mail,
  label: 'Email',
  href: 'mailto:your-email@example.com',
  display: 'your-email@example.com'
}
```

---

## 🖼️ Add Your Images

### Profile Photo
Replace: `public/portfolio_image.png`
- Recommended size: 400x500px
- Format: PNG or JPG
- Aspect ratio: 4:5

### Project Screenshots
Add to: `public/assets/`
- Format: PNG or JPG
- Recommended width: 800-1200px
- Use descriptive names (e.g., `project-name.png`)

### Resume/CV
Replace: `public/cv/Besufkad_Ayele_Resume.docx`
- Format: DOCX or PDF
- Update filename in `src/components/VerticalNav.tsx` line 34-35

---

## 🎨 Customize Colors

### Option 1: Quick Color Change
Edit `src/index.css` lines 4-13:

```css
:root {
  --black: #0a0a08;        /* Background */
  --gold: #c9a84c;         /* Accent color */
  --off-white: #f0ede6;    /* Text color */
  --warm-gray: #8a8278;    /* Secondary text */
  /* Change these values to your preferred colors */
}
```

### Option 2: Complete Theme
Create a color palette on [Coolors.co](https://coolors.co/) and replace all color variables.

---

## 🔧 Common Tasks

### Add a New Project

1. Open `src/components/ProjectsSection.tsx`
2. Add object to `projects` array (line 6):
```typescript
{
  tag: 'New Project',
  year: '2026',
  title: 'Project Name',
  desc: 'Brief description of your project and its impact.',
  tech: ['React', 'Node.js', 'PostgreSQL'],
  link: 'https://project-url.com',
  featured: false,
  image: '/assets/project-image.png'
}
```

### Add a New Skill Category

1. Open `src/components/SkillsSection.tsx`
2. Add to `skills` array (line 6):
```typescript
{
  category: 'New Category',
  tags: ['Skill1', 'Skill2', 'Skill3'],
  featured: ['Skill1', 'Skill2'] // These get highlighted
}
```

### Update Social Links

1. Open `src/components/HeroSection.tsx`
2. Edit the social array (line 149-154)
3. Open `src/components/ContactSection.tsx`
4. Edit the contacts array (line 6-25)

---

## 📱 Test Responsiveness

### Desktop
- Chrome DevTools: `F12` → Toggle device toolbar
- Test at: 1920px, 1440px, 1024px

### Tablet
- Test at: 768px (iPad)

### Mobile
- Test at: 375px (iPhone), 414px (iPhone Plus)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (Windows PowerShell)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run build

# If errors, check file paths and imports
```

### Images Not Loading
- Verify image paths start with `/` (e.g., `/portfolio_image.png`)
- Check file exists in `public/` directory
- Check filename case (case-sensitive on Linux/Mac)

---

## 🚀 Deploy Your Portfolio

### Quick Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your site is live. ✨

### Alternative: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (after `npm run build`)
3. Your site is live!

---

## 💡 Pro Tips

### Optimize Images
- Use [TinyPNG](https://tinypng.com/) to compress images
- Convert to WebP for better performance
- Recommended max file size: 500KB per image

### SEO Optimization
- Update `index.html` title and meta tags
- Add description meta tag
- Use descriptive alt text for images

### Performance
- Keep animations smooth (60fps)
- Lazy load images below the fold
- Minify production build

---

## 📚 Learn More

- [Framer Motion Docs](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS framework
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/) - React + TS guide

---

## 🆘 Need Help?

- Check [PORTFOLIO_FEATURES.md](PORTFOLIO_FEATURES.md) for detailed docs
- Open an issue on GitHub
- Contact: ayebesufkad@gmail.com

Happy coding! 🎉
