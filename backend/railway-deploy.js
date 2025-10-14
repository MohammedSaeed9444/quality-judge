#!/usr/bin/env node

// Railway deployment script
console.log('🚀 Starting Railway deployment...');

const { execSync } = require('child_process');

try {
  // Generate Prisma client
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Push database schema
  console.log('🗄️ Pushing database schema...');
  execSync('npx prisma db push', { stdio: 'inherit' });

  // Build the application
  console.log('🔨 Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Deployment preparation complete!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
