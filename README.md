# Personal Portfolio - Bharadwaj Bhargav Saikia

A responsive personal portfolio website built with plain HTML5, CSS3 and vanilla JavaScript.
All content comes from my LinkedIn profile. Nothing has been added that is not on the profile.

## Project structure

```
portfolio/
├── index.html   # page content and structure
├── style.css    # colours, layout, responsive design
├── script.js    # mobile menu, active link highlight, footer year
└── README.md    # this file
```

## Features

- Sections: Home, About, Education, Technical Skills, Projects, Experience, Certifications, Contact
- Dark theme with one accent colour
- Mobile menu (hamburger button) that opens, closes with a link click or the Escape key
- Active section highlighted in the navigation while scrolling
- Keyboard focus styles, skip link, and reduced-motion support

## How to run on macOS with VS Code

1. Open VS Code, choose **File > Open Folder...** and select the `portfolio` folder.
2. Open `index.html`.
3. Easiest way: right-click `index.html` in the Explorer panel and choose **Reveal in Finder**, then double-click it to open in your browser.
4. Better way (auto-refresh): install the **Live Server** extension (Extensions icon, search "Live Server" by Ritwick Dey). Then right-click `index.html` and choose **Open with Live Server**.
5. Alternative from the VS Code terminal (**Terminal > New Terminal**): `open index.html`

### Test checklist

- Click every navigation link and confirm the page scrolls to the right section.
- Make the browser window narrow (under 760px wide) or use the browser's device toolbar (Chrome: Cmd+Option+I, then Cmd+Shift+M).
- Click the hamburger button: the menu should open. Click a link or press Escape: it should close.

## Editing the content

- **Projects:** my LinkedIn profile lists none, so there is one placeholder card. Edit it in `index.html` (instructions are in the comment above it).
- **GitHub link:** in the Contact section, replace the grey GitHub button with a real link once you have your username.
- **Internship (TRTC):** my headline mentions it, but no details are on the profile. Add them in the Experience section when you have them.
- **Certifications:** only the names are listed. Add issuer or date only if they are real.
- **Email:** deliberately not shown. Instructions to add it are in the Contact section comment.
- **Colours and fonts:** change the variables at the top of `style.css`.

## Git commands for the assignment

First time, from the project folder in the VS Code terminal:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Or, if you create the empty repository on GitHub first and want a local copy:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

Daily workflow:

```bash
git pull                      # get the latest changes
git add .                     # stage your changes
git commit -m "Describe what you changed"
git push                      # upload to GitHub
```

To publish the site, use GitHub Pages: repository **Settings > Pages**, choose the `main` branch and the root folder.
