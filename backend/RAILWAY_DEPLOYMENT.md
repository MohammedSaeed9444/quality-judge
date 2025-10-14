# Railway Deployment Guide

This guide will help you deploy your CRM Ticketing Backend to Railway.

## Prerequisites

1. A Railway account (sign up at [railway.app](https://railway.app))
2. Your backend code ready for deployment
3. A PostgreSQL database (Railway provides this)

## Deployment Steps

### 1. Prepare Your Repository

Make sure all the Railway-specific configurations are in place:
- ✅ `railway.json` - Railway configuration
- ✅ Updated `package.json` with engines and scripts
- ✅ Modified `server.ts` to bind to `0.0.0.0`
- ✅ Updated CORS configuration
- ✅ Optimized `Dockerfile`

### 2. Deploy to Railway

#### Option A: Deploy from GitHub

1. Connect your GitHub repository to Railway
2. Select your repository and the `backend` folder as the root directory
3. Railway will automatically detect it's a Node.js project

#### Option B: Deploy with Railway CLI

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize and deploy:
   ```bash
   cd backend
   railway init
   railway up
   ```

### 3. Configure Environment Variables

In your Railway dashboard, add these environment variables:

#### Required Variables:
- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=3001` (Railway will set this automatically)

#### Database:
- Railway will automatically provide `DATABASE_URL` when you add a PostgreSQL service

#### Frontend URL:
- `FRONTEND_URL=https://your-frontend-domain.com` (update with your actual frontend URL)

### 4. Add PostgreSQL Database

1. In your Railway project dashboard, click "New Service"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically provide the `DATABASE_URL` environment variable

### 5. Deploy and Test

1. Railway will automatically build and deploy your application
2. Check the deployment logs for any errors
3. Test your API endpoints:
   - Health check: `https://your-app.railway.app/health`
   - API endpoints: `https://your-app.railway.app/api/tickets`

## Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | Auto-provided by Railway |
| `NODE_ENV` | Environment mode | Yes | `production` |
| `PORT` | Server port | Yes | `3001` (Railway sets this) |
| `HOST` | Server host | Yes | `0.0.0.0` |
| `FRONTEND_URL` | Frontend domain for CORS | No | `https://your-frontend-domain.com` |

## Troubleshooting

### Common Issues:

1. **Database Connection Issues**
   - Ensure `DATABASE_URL` is properly set
   - Check if the database service is running

2. **CORS Issues**
   - Update `FRONTEND_URL` environment variable
   - Check if your frontend domain is correct

3. **Build Failures**
   - Check the build logs in Railway dashboard
   - Ensure all dependencies are in `package.json`

4. **Port Binding Issues**
   - Ensure your app binds to `0.0.0.0:PORT`
   - Railway sets the PORT automatically

### Logs and Monitoring:

- View logs in Railway dashboard
- Monitor health check endpoint: `/health`
- Check database connection status

## Post-Deployment

1. Update your frontend to use the new Railway API URL
2. Test all API endpoints
3. Set up monitoring and alerts
4. Configure custom domain if needed

## Security Considerations

- Environment variables are secure in Railway
- Database credentials are automatically managed
- CORS is configured for production
- Rate limiting is enabled
- Helmet security headers are active

## Support

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
