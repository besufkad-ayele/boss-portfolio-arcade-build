# Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐

**Easiest and fastest deployment for React/Vite projects**

#### Method A: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. ✅ Your site is live in ~2 minutes!

#### Method B: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? (your-portfolio)
# - Directory? ./
# - Override settings? N

# Production deployment
vercel --prod
```

**Custom Domain:**
- Go to your project settings on Vercel
- Navigate to "Domains"
- Add your custom domain
- Update your DNS records as instructed

---

### Option 2: Netlify

#### Method A: Drag & Drop
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Sign up/Login
4. Drag your `dist` folder to the deploy area
5. ✅ Site is live!

#### Method B: GitHub Integration
1. Push code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

#### Method C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain
- Follow DNS configuration steps

---

### Option 3: GitHub Pages

#### Setup
```bash
# Install gh-pages package
npm install -D gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

#### Configure Base Path
Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your repo name
  // ... other config
})
```

#### Deploy
```bash
# Build and deploy
npm run deploy
```

#### Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: `gh-pages` branch
4. Save

Your site will be at: `https://username.github.io/repo-name/`

**Custom Domain:**
- Add `CNAME` file in `public/` with your domain
- Configure DNS with your domain provider

---

### Option 4: Cloudflare Pages

1. Push code to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project
4. Connect to GitHub
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
6. Deploy

Benefits: Extremely fast CDN, free SSL, unlimited bandwidth

---

### Option 5: Railway

1. Go to [railway.app](https://railway.app)
2. "New Project" → Deploy from GitHub
3. Select repository
4. Add build settings:
   ```
   Build Command: npm run build
   Start Command: npx serve dist
   ```
5. Deploy

Note: Add `serve` to dependencies:
```bash
npm install -D serve
```

---

## 🔧 Pre-Deployment Checklist

### 1. Update Personal Information
- [ ] Name and title in `HeroSection.tsx`
- [ ] Bio in `AboutSection.tsx`
- [ ] Projects in `ProjectsSection.tsx`
- [ ] Experience in `ExperienceSection.tsx`
- [ ] Contact details in `ContactSection.tsx`

### 2. Add Images
- [ ] Profile photo: `public/portfolio_image.png`
- [ ] Project images: `public/assets/*.png`
- [ ] CV file: `public/cv/YourName_Resume.docx`

### 3. Update Metadata
Edit `index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Full-Stack Developer & Product Designer portfolio">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/portfolio_image.png">
```

### 4. Optimize Images
- Compress images using [TinyPNG](https://tinypng.com/)
- Keep profile photo < 500KB
- Project images < 300KB each

### 5. Test Build Locally
```bash
# Build
npm run build

# Preview
npm run preview

# Open: http://localhost:4173
```

### 6. Check for Errors
```bash
# Run linter
npm run lint

# Check TypeScript
npm run build
```

---

## 🌍 Environment Variables (Optional)

If you need environment variables:

### Vercel
Add in dashboard: Settings → Environment Variables

### Netlify  
Add in dashboard: Site settings → Environment variables

### .env Files
Create `.env.production`:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-id
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🔒 Security Best Practices

### 1. Never Commit Secrets
Add to `.gitignore`:
```
.env
.env.local
.env.production
*.log
```

### 2. Use Environment Variables
For API keys, use environment variables, not hardcoded values

### 3. Enable HTTPS
All recommended platforms provide free SSL

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html` in `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Continuous Deployment

### Auto-Deploy on Push (Vercel/Netlify)
Both platforms auto-deploy when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel/Netlify automatically rebuilds and deploys
```

### Branch Previews
- Vercel: Every PR gets a preview URL
- Netlify: Deploy previews for all branches

---

## 🎯 Post-Deployment

### 1. Test Everything
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Navigation works (scroll, keyboard, clicks)
- [ ] CV downloads successfully
- [ ] Links open correctly
- [ ] Mobile responsive
- [ ] Animations smooth

### 2. Check Performance
Use [PageSpeed Insights](https://pagespeed.web.dev/):
- Desktop should be 90+
- Mobile should be 80+

### 3. SEO Check
Use [Google Search Console](https://search.google.com/search-console):
- Submit sitemap
- Check indexing
- Monitor performance

### 4. Share Your Portfolio! 🎉
- Update LinkedIn
- Update GitHub profile
- Share on Twitter/X
- Add to dev.to profile
- Include in email signature

---

## 🐛 Common Deployment Issues

### Issue: Images Not Loading
**Solution:** 
- Use paths starting with `/` (e.g., `/portfolio_image.png`)
- Check files are in `public/` directory
- Verify case-sensitive filenames

### Issue: 404 on Refresh
**Solution:** Add redirect rules

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

### Issue: Build Fails
**Solution:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Environment Variables Not Working
**Solution:**
- Prefix with `VITE_` 
- Restart dev server after adding
- Redeploy after changing on platform

---

## 💰 Cost Comparison

| Platform | Free Tier | Bandwidth | Custom Domain | SSL |
|----------|-----------|-----------|---------------|-----|
| Vercel | Yes | 100GB/month | ✅ | ✅ |
| Netlify | Yes | 100GB/month | ✅ | ✅ |
| GitHub Pages | Yes | 100GB/month | ✅ | ✅ |
| Cloudflare Pages | Yes | Unlimited | ✅ | ✅ |
| Railway | $5/month | Unlimited | ✅ | ✅ |

**Recommendation:** Vercel or Netlify for best developer experience

---

## 🎓 Learning Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🆘 Need Help?

- Check platform status pages
- Search documentation
- Ask in community forums:
  - [Vercel Community](https://github.com/vercel/vercel/discussions)
  - [Netlify Community](https://answers.netlify.com/)
  - [GitHub Community](https://github.community/)

---

**Your portfolio is ready to impress! 🚀**

Choose your deployment platform, follow the steps, and go live in minutes!
