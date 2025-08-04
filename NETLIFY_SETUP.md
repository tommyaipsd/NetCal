# 🚀 Netlify Deployment Guide for ABCal

Deploy your ABCal household calendar to Netlify for **FREE** with automatic deployments!

## 📋 Prerequisites

1. **GitHub account** with your code pushed
2. **Netlify account** (free at netlify.com)
3. **Supabase project** configured

## 🔧 Step-by-Step Deployment

### **Step 1: Connect to Netlify**

1. **Go to [netlify.com](https://netlify.com)** and sign up/login
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify
4. **Select your ABCal repository**

### **Step 2: Configure Build Settings**

Netlify should auto-detect these settings from `netlify.toml`, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18`

### **Step 3: Add Environment Variables**

1. **After deployment setup**, go to **Site settings**
2. **Navigate to**: Environment variables
3. **Add these 3 variables**:

   **Variable 1:**
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: Your Supabase project URL

   **Variable 2:**
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: Your Supabase anonymous key

   **Variable 3:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: Your Supabase service role key

### **Step 4: Deploy**

1. **Click "Deploy site"**
2. **Wait 2-3 minutes** for the build to complete
3. **Your site is live!** Netlify will give you a URL like:
   `https://amazing-name-123456.netlify.app`

## 🎯 **Custom Domain (Optional)**

1. **Go to Site settings** → **Domain management**
2. **Add custom domain** if you have one
3. **Netlify provides free SSL** automatically

## 🔄 **Automatic Deployments**

✅ **Every time you push to GitHub**:
- Netlify automatically rebuilds your site
- Updates go live in 2-3 minutes
- No manual intervention needed!

## 🔍 **Troubleshooting**

### **Build Fails?**

**Check the deploy log**:
1. Go to **Deploys** tab
2. Click on the failed deployment
3. Read the build log for errors

**Common fixes**:
- ✅ Verify all 3 environment variables are set correctly
- ✅ Check that your Supabase keys are valid
- ✅ Make sure your GitHub repo has all the latest files

### **App Loads But No Data?**

**Supabase Connection Issues**:
- Verify your Supabase URL and keys
- Check Supabase dashboard for any errors
- Ensure your Supabase project allows connections from your Netlify domain

### **Styling Issues?**

**CSS Not Loading**:
- Usually resolves automatically after first deploy
- Try hard refresh (Ctrl+F5)
- Check if CSS files are in the `out` directory

## 💡 **Netlify Features You Get FREE**

- ✅ **Unlimited bandwidth** for personal projects
- ✅ **Automatic HTTPS** with free SSL certificates
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Deploy previews** for every pull request
- ✅ **Form handling** (if you add contact forms later)
- ✅ **Custom domains** with automatic SSL

## 🎉 **Pro Tips**

### **Branch Deployments**:
- Create a `staging` branch for testing
- Netlify can auto-deploy different branches to different URLs

### **Deploy Notifications**:
- Set up Slack/email notifications for successful/failed deploys
- Monitor your site's performance with Netlify Analytics

### **Speed Optimizations**:
- Netlify automatically optimizes images and assets
- Enable asset optimization in Site settings

## 🔗 **Useful Links**

- **Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
- **Build Logs**: Available in your site's Deploys tab
- **Site Settings**: Configure domains, environment variables, etc.

## 🎯 **Expected Results**

- **Build time**: 2-3 minutes
- **Your live URL**: `https://your-site-name.netlify.app`
- **Performance**: Fast loading with global CDN
- **Uptime**: 99.9% reliability

## 🚀 **You're Live!**

Your ABCal household calendar is now deployed on Netlify! Share the URL with your family and start organizing your events together! 📅✨

**Remember**: Every time you push changes to GitHub, Netlify automatically updates your live site!