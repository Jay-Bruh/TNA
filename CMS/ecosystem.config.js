module.exports = {
  apps: [
    {
      name: 'cms',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        "NODE_ENV": "production",
      },
      env_production: {
        "NODE_ENV": "production"
      }
    },
  ],
};