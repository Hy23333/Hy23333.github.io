# Yi He — Academic Web Profile

A responsive bilingual (English / Chinese) academic portfolio built as a dependency-free static site.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Add the headshot later

The portrait frame is intentionally empty. Add the image at `assets/headshot.jpg`, then replace this line in `index.html`:

```html
<div class="headshot-slot" role="img" aria-label="Headshot placeholder"></div>
```

with:

```html
<div class="headshot-slot"><img src="assets/headshot.jpg" alt="Portrait of Yi He" /></div>
```

## Files

- `index.html` — semantic page structure and CV content
- `styles.css` — responsive editorial design and motion
- `script.js` — language switcher, publication filter, mobile navigation
- `assets/Yi_He_CV_2026.pdf` — downloadable CV
