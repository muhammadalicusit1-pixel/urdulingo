# Urdu Lingo Website

Official website for Urdu Lingo - Learn English the Smart Way

🌐 **Live Demo**: [Coming Soon]

## 🌟 Features

- Modern, responsive design
- Bilingual support (English & Urdu)
- Direct APK download for Android
- About section with mission statement
- Contact section with social media links
- SEO optimized

## 🛠️ Technologies

- HTML5, CSS3, JavaScript
- React (via CDN)
- Font Awesome Icons
- Google Fonts (Inter & Noto Nastaliq Urdu)

## 📁 Project Structure

```
urdu-lingo-website/
├── index.html          # Main HTML file
├── app.js             # React components
├── styles.css         # Styles
├── vercel.json        # Vercel configuration
├── manifest.json      # PWA manifest
├── robots.txt         # SEO robots file
├── .gitignore         # Git ignore rules
└── assets/
    └── apk/
        └── app-release.apk  # Android APK (95MB)
```

## 🚀 Deploy to Vercel via GitHub

### Step 1: Push to GitHub

```bash
# Navigate to website folder
cd urdu-lingo-website

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Urdu Lingo website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/urdu-lingo-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Import your `urdu-lingo-website` repository
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
6. Click "Deploy"

**Done! Your site will be live in ~30 seconds!** 🎉

### Step 3: Get Your URL

After deployment, you'll get a URL like:
```
https://urdu-lingo-website.vercel.app
```

## 🔄 Update Your Website

After making changes:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically deploy your changes!

## 📝 Before Going Live

Update these in `app.js`:

1. **Phone**: Change `+92 300 1234567` to your actual number
2. **Email**: Change `support@urdulingo.com` to your actual email
3. **Social Media**: Update all social media URLs:
   - Facebook: `https://facebook.com/urdulingo`
   - Instagram: `https://instagram.com/urdulingo`
   - Twitter: `https://twitter.com/urdulingo`
   - YouTube: `https://youtube.com/@urdulingo`

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `urdulingo.com`)
3. Follow DNS configuration instructions

## 🧪 Local Development

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Visit `http://localhost:8000`

## 📱 Sections

1. **Hero** - Main banner with APK download
2. **Features** - 6 key features
3. **Stats** - Animated statistics
4. **About** - Mission and company info
5. **Contact** - Contact info and social media
6. **CTA** - Call-to-action
7. **Footer** - Links and information

## 🎨 Customization

### Colors
- Primary Green: `#58CC02`
- Secondary Green: `#4CAF50`
- Dark: `#2c3e50`
- Light Gray: `#f8f9fa`

### Fonts
- English: Inter (Google Fonts)
- Urdu: Noto Nastaliq Urdu (Google Fonts)

## 🔒 Security

- HTTPS enabled automatically on Vercel
- APK files served with correct headers
- No sensitive data in code

## 📊 Analytics

Enable Vercel Analytics:
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics
3. View real-time traffic data

## 🐛 Troubleshooting

### APK Download Not Working
- Verify APK file exists at `assets/apk/app-release.apk`
- Check `vercel.json` configuration
- File must be < 100MB

### Fonts Not Loading
- Check Google Fonts CDN links in `index.html`
- Verify internet connection

### Deployment Failed
- Check Vercel deployment logs
- Verify all files are committed to GitHub
- Check file size limits

## 💰 Vercel Free Tier

Perfect for this website:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ HTTPS included
- ✅ Custom domains
- ✅ Global CDN

## 📞 Support

- Email: support@urdulingo.com
- Phone: +92 300 1234567

## 📄 License

© 2026 Urdu Lingo. All rights reserved.

## 🎉 Credits

Built with ❤️ for Urdu speakers learning English

---

**Urdu Lingo** - Learn English the Smart Way | ذہین طریقے سے انگریزی سیکھیں
