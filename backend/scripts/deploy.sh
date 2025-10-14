#!/bin/bash

# Railway deployment script
echo "🚀 Starting Railway deployment process..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Push database schema
echo "🗄️ Pushing database schema..."
npx prisma db push

# Build the application
echo "🔨 Building application..."
npm run build

# Start the application
echo "🎯 Starting application..."
npm start
