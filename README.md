<div align="center">

# Reviews Slider

A clean and interactive customer reviews slider built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

[![HTML5](https://img.shields.io/badge/HTML5-markup-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-styling-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-interactivity-F7DF1E?logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<!-- Add your screenshot at this path to display the project preview on GitHub. -->
<img src="./assets/images/reviews-slider-preview.png" alt="Reviews Slider preview" width="800" />

</div>

## Overview

**Reviews Slider** displays customer testimonials in a simple card layout. Visitors can move between reviews and see each customer's profile, role, comment, and rating update dynamically.

## Features

- Navigate between customer reviews using the **Next** and **Previous** buttons.
- Update the customer's image, name, role, and comment dynamically.
- Display each review's rating with dynamically updated star colors.
- Keep navigation within the available reviews, without going past the first or last item.

## Built With

- **HTML5** — page structure
- **Tailwind CSS** — styling and layout
- **Vanilla JavaScript** — slider behavior and DOM updates

## Project Structure

```text
.
├── index.html
├── assets/
│   └── images/
│       ├── person-1.png
│       ├── person-2.jpg
│       ├── person-3.png
│       ├── person-4.png
│       └── reviews-slider-preview.png
└── src/
    ├── JS/
    │   └── main.js
    ├── input.css
    └── output.css
```

## Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   ```

2. Open the project folder in your code editor.
3. Open `index.html` in your browser, or run it with the **Live Server** extension in VS Code.

> The HTML file loads the compiled stylesheet from `src/output.css`. Make sure this file is present when running or deploying the project.

## What I Practiced

- Working with arrays of objects to organize review data.
- Selecting and updating DOM elements.
- Using `forEach()` to iterate over the rating stars.
- Managing the active review with an index.
- Handling click events and preventing out-of-range navigation.

---

<div align="center">

**Built with care and a lot of JavaScript practice.**

</div>
