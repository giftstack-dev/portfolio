# Eseoghene Gift-Asisisi — Portfolio Website

A personal developer portfolio website built with React, TypeScript, and Tailwind CSS. Modern, fast, responsive across all screen sizes (360px to 4K), accessible, and equipped with a dark/light theme switch, terminal animation, project filters, and case study modals.

---

## 1. How to Edit Your Content

All personal content and project records are kept in typed configuration files so you can edit everything in one place without touching component markup:

- **Personal Information & Experience**: `/src/data/siteData.ts`
  - Edit your name, role headline, hero subtext, and location.
  - Toggle `showOpenToWork: true | false` to show or hide the "Open to graduate and junior software roles" badge.
  - Update contact information (email, phone, WhatsApp, LinkedIn, GitHub).
  - Edit bio paragraphs, education details, and work experience entries.
  - Update technical skill categories and items.

- **Projects & Case Studies**: `/src/data/projects.ts`
  - Add or update projects with `id`, `title`, `tagline`, `category`, `status`, `tags`, `description`, `features`, `problem`, `solution`, `learned`, `repoUrl`, and `liveUrl`.
  - When CI/CD Pipeline Showcase workflows are all green, change `status: "In progress"` to `"Completed"`.
  - When repos are published for Frontdoor Templates or Sarahskye Collection, update their `repoUrl`.
  - Toggle `featured: true` to place any project in the prominent top grid.

---

## 2. Where to Place Your Files & Assets

Put your assets in the `/public` directory so they are served directly at the root:

1. **Profile Photo**:
   - Location: `/public/images/profile.jpg`
   - *Behavior*: If the file is not yet uploaded, the site displays a stylish "EG" initials avatar with the accent gradient. As soon as you add `profile.jpg`, it fades in automatically.

2. **Project Screenshots**:
   - Location: `/public/images/projects/{id}.png`
   - Examples:
     - `/public/images/projects/vaultpay.png`
     - `/public/images/projects/vybe.png`
     - `/public/images/projects/ci-cd-pipeline-showcase.png`
     - `/public/images/projects/frontdoor-templates.png`
     - `/public/images/projects/sarahskye-collection.png`
     - `/public/images/projects/sdu-portal.png`
   - *Behavior*: Every project has a built-in code-rendered illustrated banner. If you add a PNG screenshot matching the project's ID, it will cleanly fade in on top. If not present or if it fails to load, the custom illustration remains without any broken image icons.

3. **Curriculum Vitae (CV)**:
   - Location: `/public/Eseoghene-Gift-Asisisi-CV.pdf`
   - *Behavior*: The "Download CV" button automatically checks if this file exists on load. If it does not exist, it shows **"CV coming soon"** in a disabled state so visitors never click a broken link. Once you drop your PDF file in `/public`, the button activates for direct download.

---

## 3. How to Deploy (Vercel or Netlify)

This project is a standard Vite React SPA and can be deployed with one click:

### Vercel:
1. Push your repository to GitHub (`git push origin main`).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Configure settings (auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Netlify:
1. Log in to [netlify.com](https://netlify.com) and click **"Add new site"** &rarr; **"Import an existing project"**.
2. Connect your GitHub repository.
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check / linter
npm run lint

# Build for production
npm run build
```
