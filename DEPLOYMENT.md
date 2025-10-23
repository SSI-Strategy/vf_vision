# Deployment Guide

## 🚀 Deploying to GitHub Pages

### One-Time Setup

1. **Create a GitHub repository**
   ```bash
   # On GitHub.com, create a new repository called 'vf_vision'
   # Then link your local repository:
   git remote add origin https://github.com/YOUR_USERNAME/vf_vision.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy the site**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **gh-pages** branch
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/vf_vision/`

### Subsequent Deployments

After making changes:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the production bundle (`npm run build`)
2. Deploy to the `gh-pages` branch
3. Update the live site automatically

## 🔐 Password Information

**Current Access Code:** `VelocityFoundry2025!`

To change the password:
1. Edit `src/utils/constants.js`
2. Update the `SITE_ACCESS_CODE` variable
3. Rebuild and redeploy

## 🎨 Customization

### Update Base Path (if using custom domain or different repo name)

Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Change this
})
```

### Update Colors

Edit `tailwind.config.js` to modify the SSI color palette.

### Test Locally Before Deploying

```bash
# Run development server
npm run dev

# Build and preview production build
npm run build
npm run preview
```

## 📊 Performance Checklist

Before deploying:
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Verify all animations are smooth
- [ ] Check horizontal scroll works
- [ ] Test keyboard navigation (arrow keys)
- [ ] Verify password gate works
- [ ] Confirm all slides load correctly

## 🔧 Troubleshooting

### GitHub Pages shows 404
- Ensure `gh-pages` branch exists
- Check GitHub Pages settings point to `gh-pages` branch
- Verify `base` path in `vite.config.js` matches your repo name

### Animations are choppy
- Check browser performance
- Reduce number of animated particles in Slide1Hero.jsx and Slide8WhyNow.jsx
- Disable animations for low-end devices

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` again

## 📝 Content Updates

To update slide content:
1. Edit the appropriate file in `src/slides/`
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`

## 🌐 Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## 🔒 Security Note

The password protection is **client-side only**. For production use with sensitive content, consider:
- Hosting on Vercel/Netlify with proper authentication
- Implementing server-side authentication
- Using a service like Auth0 or Firebase Auth

The current implementation provides basic protection against casual access.

---

## Quick Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
npm run deploy       # Deploy to GitHub Pages

# Git
git add .
git commit -m "Update content"
git push origin main
npm run deploy       # Deploy the changes
```

---

*For questions or issues, refer to the README.md file.*
