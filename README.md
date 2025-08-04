# 🏠 ABCal - Household Calendar

A beautiful, shared family calendar with real-time sync, built with Next.js and Supabase.

## ✨ Features

- 📅 **Shared Family Calendar** - Everyone sees the same events
- 🔄 **Real-time Sync** - Updates instantly across all devices  
- 👥 **Member Management** - Add family members with different colors
- 🔔 **Smart Notifications** - Get reminded about upcoming events
- 🎨 **Beautiful Design** - Modern, clean interface
- 📱 **Mobile Friendly** - Works perfectly on phones and tablets

## 🚀 One-Click Deploy to Heroku

Deploy your own ABCal instance instantly with this button:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tommyaipsd/NetCal)

**What happens when you click:**
1. Creates a new Heroku app for you
2. Builds and deploys ABCal automatically  
3. Prompts you to enter your Supabase credentials
4. Your app goes live in 2-3 minutes!

## 🔑 Required Environment Variables

You'll need these from your Supabase project:

| Variable | Description | Where to Find |
|----------|-------------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public API key | Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key | Project Settings → API |

## 📋 Before You Deploy

### 1. **Set Up Supabase Database**

Run this SQL in your Supabase SQL editor:

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

-- Create policies (allow all for simplicity - adjust for your needs)
CREATE POLICY "Allow all operations on household_members" ON household_members
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on events" ON events  
  FOR ALL USING (true) WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_events_member_id ON events(member_id);
```

### 2. **Get Your Supabase Credentials**

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project  
3. Go to **Settings** → **API**
4. Copy the values for the deploy button

## 🎯 After Deployment

### **Your Live App**
After clicking deploy, your ABCal will be available at:
`https://your-app-name.herokuapp.com`

### **First Steps:**
1. **Add Family Members** - Click the "+" button to add household members
2. **Create Events** - Start adding your family's events and appointments
3. **Share the URL** - Give the link to all family members
4. **Enjoy!** - Your household is now organized! 🎉

## 🔧 Alternative Deployment Methods

If one-click deploy doesn't work for you:

### **Method 2: Manual Heroku Deploy**
```bash
git clone this-repo
cd abcal
heroku create your-app-name
heroku config:set NEXT_PUBLIC_SUPABASE_URL=your_url
heroku config:set NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key  
heroku config:set SUPABASE_SERVICE_ROLE_KEY=your_service_key
git push heroku main
```

### **Method 3: Other Platforms**
- **Railway**: Connect GitHub repo and deploy
- **Render**: Import from GitHub and add env vars
- **DigitalOcean App Platform**: One-click deploy from GitHub

## 🛠️ Local Development

Want to customize ABCal? Run it locally:

```bash
git clone this-repo
cd abcal
npm install
cp .env.example .env.local
# Add your Supabase credentials to .env.local
npm run dev
```

Visit `http://localhost:3000` to see your local ABCal.

## 🎨 Customization

ABCal is built to be customizable:

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Features**: Add new event types in `lib/eventTypes.js`
- **Layout**: Modify components in the `components/` folder
- **Database**: Extend the schema in Supabase for new features

## 🤝 Contributing

Found a bug or want to add a feature?

1. Fork this repository
2. Create a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`  
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

Built with:
- **Next.js** - React framework
- **Supabase** - Backend and database
- **Tailwind CSS** - Styling
- **Lucide React** - Beautiful icons
- **Heroku** - Reliable hosting

---

**Made with ❤️ for families who want to stay organized together!**

## 🆘 Need Help?

- **Supabase Issues**: Check your database setup and API keys
- **Deployment Problems**: Verify all environment variables are set
- **Feature Requests**: Open an issue on GitHub

**Happy organizing! 📅✨**