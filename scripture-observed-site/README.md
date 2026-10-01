# Scripture Observed

A lightweight, English-first research and documentary website for GitHub Pages, with a Korean-language structure.

## Publish to GitHub Pages (easiest method)

1. Download or copy this entire folder. Keep the folder structure exactly as it is.
2. Open <https://github.com/scriptureobserved/scriptureobserved.github.io> and sign in.
3. Choose **Add file → Upload files**.
4. Drag **all files and folders inside this project folder** into the upload area. Important: upload the contents, not one enclosing folder. `index.html` must appear at the repository's top level.
5. At the bottom, enter `Publish first website version` and choose **Commit changes**.
6. Open **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder to **/(root)**, then choose **Save**.
7. Wait 1–5 minutes, then visit <https://scriptureobserved.github.io>.

GitHub Pages often detects a user-site repository automatically. If the site is already enabled, step 6 may already be complete.

## Edit the site later

- Homepage: `index.html`
- Main research page: `research/speaking-in-tongues/index.html`
- Korean homepage: `ko/index.html`
- Korean research page: `ko/research/speaking-in-tongues/index.html`
- Colors and layout: `assets/css/styles.css`

The research placeholders are intentional. Replace them only after claims and sources have been verified.

## Preview on a computer

From this folder, run a small local web server (for example `python3 -m http.server 8000`) and open `http://localhost:8000`.

## Future AdSense support

The homepage includes a hidden `.ad-slot` hook. Add AdSense only after the site has substantial original content and has been approved. Keep ads clearly labeled and separate from research content.
