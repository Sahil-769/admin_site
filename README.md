# Admin Site Express Server

This small project adds an Express server to serve the `frontend` folder and respond to GET / with `admin_site.html`.

## Local Development

Quick start (PowerShell):

```powershell
# install dependencies
npm install

# start server
npm start

# open in browser
Start-Process http://localhost:3000/
```

Development (auto-restart):

```powershell
npm run dev
```

## Deploy to Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and configure your service

### Option 2: Manual Setup

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: admin-site (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or your preferred plan)
6. Click "Create Web Service"

Your app will be deployed and accessible at: `https://your-app-name.onrender.com`
