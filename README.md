# Deployment Instructions for Vercel and Render

## Vercel Deployment

1. **Sign in to Vercel**: Go to [vercel.com](https://vercel.com) and sign in or create an account.
2. **Import Project**: Click on the `New Project` button, and select your GitHub repository (`tcgcardhunters`).
3. **Configure Settings**: Follow the prompts to configure your project. Vercel will automatically detect the framework and settings.
4. **Environment Variables**: If your project uses environment variables, you can add them in the settings section for the project.
5. **Deploy**: Click on `Deploy` to launch your application. Vercel will build and deploy your project immediately.
6. **Custom Domain**: You can add a custom domain in the project settings, if needed.

## Render Deployment

1. **Sign in to Render**: Go to [render.com](https://render.com) and sign in or create an account.
2. **Create New Web Service**: Click `New` and select `Web Service`.
3. **Connect to GitHub**: Authorize Render to access your GitHub account and select the `tcgcardhunters` repository.
4. **Configure Service**: Set the environment, region, and other settings. Ensure you select the correct branch (default: `main`).
5. **Environment Variables**: Same as Vercel, add any required environment variables.
6. **Deploy**: Click on `Create Web Service` to start the deployment. Render will build and deploy your project.
7. **Custom Domain**: You can add a custom domain through the Render dashboard.

Make sure to monitor your deployments for any issues and create logs for debugging as necessary.