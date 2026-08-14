# 🎨 Color Palette Generator

A simple, responsive web app that generates random color palettes and lets you copy any hex code to your clipboard with a single click.

## ✨ Features

- Generate 5 random color palettes with one click
- Click any color swatch to copy its hex code
- Dedicated copy icon with visual feedback (checkmark on success)
- Built with vanilla JavaScript — no frameworks, no dependencies

## 🚀 Demo

> Add a screenshot or GIF of the app here

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Font Awesome](https://fontawesome.com/) for icons

## 📦 Getting Started

### Prerequisites

Nothing to install — this is a static site.

### Installation

1. Clone the repo
   ```bash
   https://github.com/rijalaalh/Frontend-Projects/tree/main/2-Color-palette-Generator
   ```
2. Open the project folder
   ```bash
   cd 2-Color-palette-Generator
   ```
3. Open `index.html` in your browser

That's it — no build step required.

## 📁 Project Structure

```
color-palette-generator/
├── index.html      # Main HTML structure
├── style.css       # Styling
├── script.js       # App logic (palette generation, copy-to-clipboard)
└── README.md
```

## 🧠 How It Works

- Clicking **Generate Palette** creates 5 random hex colors and updates each color box.
- Clicking a color swatch or the copy icon copies the hex value to your clipboard using the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).
- Event handling uses **event delegation** with `closest()` to reliably detect clicks on Font Awesome icons, which are rendered as SVG elements at runtime.

## 📄 License

This project is licensed under the MIT License — feel free to use it however you like.

## 🙋‍♂️ Author

Made by [sajed Toumi](https://github.com/Sajed.T)
