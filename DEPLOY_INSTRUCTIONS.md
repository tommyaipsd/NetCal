# 🚀 One-Click Deploy Instructions

## 🎯 **Ready to Deploy ABCal?**

Your ABCal household calendar is ready for **instant deployment** to Heroku!

## 📋 **Before You Click Deploy**

### **Step 1: Get Your Supabase Credentials**

You'll need these 3 values from your Supabase project:

1. **Go to [Supabase Dashboard](https://app.supabase.com)**
2. **Select your project**
3. **Go to Settings → API**
4. **Copy these values:**
   - `Project URL` 
   - `anon public key`
   - `service_role secret key`

### **Step 2: Set Up Database Tables**

**Run this SQL in your Supabase SQL Editor:**

```sql
-- Create household_members table
CREATE TABLE household_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  color TEXT NOT NULL DEFAULT '#3b82f6',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table  
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  all_day BOOLEAN DEFAULT FALSE,
  member_id UUID REFERENCES household_members(id),
  location TEXT,
  reminder_minutes INTEGER DEFAULT 30,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE household_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for simplicity)
CREATE POLICY "Allow all operations on household_members" ON household_members
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on events" ON events  
  FOR ALL USING (true) WITH CHECK (true);
```

## 🚀 **Deploy Button**

**Click this button to deploy instantly:**

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/abcal)

## 🔧 **What Happens When You Click:**

1. **Heroku opens** with your app template
2. **Enter app name** (or let Heroku generate one)
3. **Add your 3 Supabase credentials** in the form
4. **Click "Deploy app"**
5. **Wait 2-3 minutes** for build to complete
6. **Click "View"** to see your live ABCal! 🎉

## 📝 **Form Fields You'll See:**

| Field | What to Enter |
|-------|---------------|
| **App name** | `my-abcal-calendar` (or any unique name) |
| **NEXT_PUBLIC_SUPABASE_URL** | Your Supabase Project URL |
| **NEXT_PUBLIC_SUPABASE_ANON_KEY** | Your anon public key |
| **SUPABASE_SERVICE_ROLE_KEY** | Your service_role secret key |

## 🎯 **After Deployment:**

### **Your Live App:**
`https://your-app-name.herokuapp.com`

### **First Steps:**
1. ✅ **Add Family Members** - Click "+" to add household members
2. ✅ **Create Your First Event** - Test the calendar functionality  
3. ✅ **Share the URL** - Give the link to family members
4. ✅ **Bookmark It** - Add to your phone's home screen

## 🆘 **Troubleshooting:**

### **Deploy Button Not Working?**
- Make sure you're logged into GitHub
- Try the manual Heroku method instead

### **Build Fails?**
- Check that all 3 environment variables are filled in correctly
- Verify your Supabase credentials are valid

### **App Loads But No Data?**
- Confirm you ran the SQL setup in Supabase
- Check that your Supabase project allows connections

## 🔄 **Manual Deploy Alternative:**

If the deploy button doesn't work:

```bash
# 1. Clone this repo
git clone your-repo-url
cd abcal

# 2. Create Heroku app  
heroku create your-abcal-app

# 3. Set environment variables
heroku config:set NEXT_PUBLIC_SUPABASE_URL=your_url
heroku config:set NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
heroku config:set SUPABASE_SERVICE_ROLE_KEY=your_service_key

# 4. Deploy
git push heroku main

# 5. Open your app
heroku open
```

## 🎉 **Success!**

Your ABCal household calendar is now **live on the internet**! 

Share the URL with your family and start organizing your household events together! 📅✨

---

**Ready? Click the deploy button above! 🚀**