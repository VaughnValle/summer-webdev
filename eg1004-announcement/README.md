# Week 1: Recreate the Legacy EG Poly Website 

[![Website link](thumb.png) 'Website'](https://eg.vaughnv.com)

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── App.jsx
│   └── pages/
│   │   └── index.astro
│   └── components/
├── package.json
├── .vscode/
```

* `/src/App.jsx` contains the main React component
* `/src/pages/index.astro` is the entrypoint for the whole website/webapp
* `/src/components` contains all the React components used

Oh, and there's a `.vscode/` folder containing recommended configs for VSCode if you need it

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview build locally, before deploying          |
