# Kalpana Portfolio — React.js + Material UI

This is a React + MUI conversion of your original HTML/CSS/JavaScript portfolio. It keeps the dark background, blue accent, fixed navigation, typing animation, hero layout, skill cards, project cards, contact form, and footer/social links.

## Run locally
1. Install Node.js (if it is not already installed).
2. Open this folder in VS Code.
3. In the terminal run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Add your existing images
Copy these image files into the `public` folder:
- `profile.jpg.jpg` — the profile image referenced by your original HTML
- `project1.jpg` — Weather App image
- `project2.jpg` — Portfolio project image

If your image filenames differ, update the image paths in `src/App.jsx`.

## Main files
- `src/App.jsx` — React components and portfolio content
- `src/styles.css` — styling adapted from your original CSS
- `src/main.jsx` — React entry point and MUI theme
