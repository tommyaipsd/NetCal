# 🚀 Heroku Deployment Guide for ABCal

Deploy your ABCal household calendar to Heroku - much more reliable than Netlify for Node.js apps!

## 📋 Prerequisites

1. **Heroku account** (free at heroku.com)
2. **Heroku CLI** installed on your computer
3. **Git repository** with your code
4. **Supabase project** configured

## 🔧 Method 1: Heroku CLI (Recommended)

### **Step 1: Install Heroku CLI**

**Windows/Mac/Linux:**
- Download from: [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
- Or use package managers:
  ```bash
  # Mac with Homebrew
  brew tap heroku/brew && brew install heroku
  
  # Ubuntu/Debian
  sudo snap install --classic heroku
  
  # Windows with Chocolatey
  choco install heroku-cli
  ```

### **Step 2: Login and Create App**

```bash
# Login to Heroku
heroku login

# Create new Heroku app (replace 'your-app-name' with unique name)
heroku create your-abcal-app

# Or let Heroku generate a name
heroku create
```

### **Step 3: Set Environment Variables**

```bash
# Add your Supabase credentials
heroku config:set NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
heroku config:set NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
heroku config:set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Verify they're set
heroku config
```

### **Step 4: Deploy**

```bash
# Add Heroku remote (if not done automatically)
heroku git:remote -a your-abcal-app

# Deploy to Heroku
git add .
git commit -m "Deploy ABCal to Heroku"
git push heroku main

# Open your live app
heroku open
```

## 🌐 Method 2: Heroku Dashboard (Web Interface)

### **Step 1: Create App via Dashboard**

1. **Go to [dashboard.heroku.com](https://dashboard.heroku.com)**
2. **Click "New" → "Create new app"**
3. **Enter app name** (e.g., "my-abcal-calendar")
4. **Choose region** (United States or Europe)
5. **Click "Create app"**

### **Step 2: Connect GitHub**

1. **In your new app dashboard**, go to **Deploy** tab
2. **Deployment method**: Choose **GitHub**
3. **Connect to GitHub** and authorize Heroku
4. **Search for your repository** and click **Connect**

### **Step 3: Add Environment Variables**

1. **Go to Settings** tab
2. **Click "Reveal Config Vars"**
3. **Add these 3 variables**:
   - Key: `NEXT_PUBLIC_SUPABASE_URL` | Value: Your Supabase URL
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Value: Your Supabase anon key
   - Key: `SUPABASE_SERVICE_ROLE_KEY` | Value: Your Supabase service key

### **Step 4: Deploy**

1. **Back to Deploy** tab
2. **Scroll to Manual deploy**
3. **Select branch**: `main` (or `master`)
4. **Click "Deploy Branch"**
5. **Wait 2-3 minutes** for build to complete
6. **Click "View"** to see your live app!

## 🔄 Method 3: One-Click Deploy

### **Deploy Button (Fastest)**

Click this button to deploy instantly:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/abcal)

*Note: Replace `yourusername/abcal` with your actual GitHub repository*

## 🎯 **Your Live URLs**

After deployment, your ABCal app will be available at:
- **Heroku URL**: `https://your-app-name.herokuapp.com`
- **Custom domain**: Can be added in Settings → Domains

## 🔍 **Troubleshooting**

### **Build Fails?**

**Check build logs**:
```bash
# Via CLI
heroku logs --tail

# Or in Heroku dashboard
Go to Activity tab → View build log
```

### **App Won't Start?**

**Common fixes**:
```bash
# Check if app is running
heroku ps

# Restart app
heroku restart

# Check environment variables
heroku config
```

### **Database Connection Issues?**

- ✅ Verify all 3 Supabase config vars are set correctly
- ✅ Check Supabase project allows connections from your Heroku domain
- ✅ Test Supabase credentials in Supabase dashboard

## 💰 **Heroku Pricing**

### **Free Tier** (Perfect for ABCal):
- ✅ **550-1000 free hours/month**
- ✅ **Custom domains** supported
- ✅ **SSL certificates** included
- ✅ **GitHub integration**

### **Eco Dyno** ($5/month):
- ✅ **Never sleeps** (free apps sleep after 30 min)
- ✅ **Better performance**
- ✅ **More reliable**

## 🎉 **Advantages of Heroku**

- ✅ **Reliable Node.js builds** (unlike Netlify issues)
- ✅ **Automatic deployments** from GitHub
- ✅ **Built-in logging** and monitoring
- ✅ **Easy scaling** when your family grows
- ✅ **Add-ons ecosystem** (databases, monitoring, etc.)

## 🔧 **Heroku-Specific Files**

Your project now includes:
- **`Procfile`** - Tells Heroku how to start your app
- **`app.json`** - App metadata for one-click deploy
- **Updated `package.json`** - Heroku-compatible scripts

## 🚀 **Post-Deployment**

### **Enable Automatic Deploys**:
1. **Heroku Dashboard** → **Deploy** tab
2. **Automatic deploys** section
3. **Enable Automatic Deploys** for `main` branch
4. **Every GitHub push** now auto-deploys!

### **Custom Domain** (Optional):
1. **Settings** tab → **Domains**
2. **Add domain** → Enter your custom domain
3. **Configure DNS** as instructed

## 🎯 **Expected Results**

- **Build time**: 1-2 minutes
- **App URL**: `https://your-app-name.herokuapp.com`
- **Performance**: Fast, reliable
- **Automatic sleep**: Free apps sleep after 30 min of inactivity

## 🎉 **Success!**

Your ABCal household calendar is now live on Heroku! Much more reliable than the Netlify build issues you were experiencing.

**Share your Heroku URL with family members and start organizing your household events!** 📅✨