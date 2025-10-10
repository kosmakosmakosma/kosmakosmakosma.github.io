# Portfolio

A minimal, robust portfolio that works on GitHub Pages. Includes:
- Landing page with About, CV link, and socials
- Projects index
- Project page with LaTeX via MathJax

## Quick start

1) **Use this as your repo**
- Create a new GitHub repository and add these files.
- Or upload this folder to an existing repo.

2) **Personalize**
- Replace text "Your Name", descriptions, and links in `index.html` and `projects/*`.
- Put your photo at `assets/img/profile.jpg`.
- Add your CV as `assets/cv/CV.pdf` and update links.

3) **Publish**
- Go to **Settings → Pages** in your repository.
- Under **Build and deployment**, set:
  - **Source**: `Deploy from a branch`
  - **Branch**: `main` (or the default branch), **/ (root)** folder
- Click **Save**. In a minute or two your site will be live at:
  - `https://<your-username>.github.io/<your-repo>/`
  - Or, if the repo is named `<your-username>.github.io`, it will be at the root: `https://<your-username>.github.io/`

## Add more projects

- Duplicate `projects/sample-project.html` (e.g., `projects/my-next-project.html`).
- Add a new card in `projects/index.html` linking to it.

## LaTeX notes

- Use `$ ... $` or `\\( ... \\)` for inline math.
- Use `$$ ... $$` or `\\[ ... \\]` for display math.
- MathJax is loaded only on pages that need it (project detail pages).

## Local preview

You can open the HTML files directly in your browser. For cleaner testing of relative links, run a simple local server:
```bash
python3 -m http.server 4000
