# Valentine's Day Proposal Web App

A playful, interactive Valentine's Day web experience built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and canvas-confetti.

## Features

✨ **Interactive Teasing Phase:**
- Animated "No" button that evades mouse hover with spring physics
- Dynamic text changes on both buttons as user tries to click "No"
- Cute animated GIF and romantic styling
- Responsive design for all devices

🎉 **Celebration Phase:**
- Confetti explosion when "Yes" is clicked
- Heartfelt romantic message with sincere apology
- Beautiful card layout with romantic styling
- Option to restart the experience

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom romantic color palette
- **Animations:** Framer Motion for smooth interactions
- **Effects:** Canvas-confetti for celebration moments

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

**Phase 1 - The Tease:**
- User sees a cute animated GIF and the question "Will you be my Valentine?"
- "Yes" button stays fixed but grows larger with each "No" attempt
- "No" button moves to random positions when hovered/tapped
- Button text changes to increasingly desperate pleas

**Phase 2 - The Celebration:**
- When user clicks "Yes", confetti explodes
- Smooth transition to romantic message card
- Includes heartfelt apology and love message
- "Ask Me Again" button to restart the experience

## Customization

You can easily customize:
- GIF URLs in the ValentinePage component
- Color palette in tailwind.config.ts
- Text messages and timing
- Animation parameters

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js app
6. Click "Deploy" - that's it!

### Manual Deployment Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables (if needed)
Create a `.env.local` file for any secrets:
```env
# Add any environment variables here
```

## Custom Domain
After deployment, you can add a custom domain in your Vercel project settings for a personalized Valentine's URL!

Built with ❤️ for Valentine's Day!