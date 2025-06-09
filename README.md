# Personal Brand Website - Juan Bautista Martínez

Modern, minimalist personal brand website built with SvelteKit and Juno.build.

## Tech Stack
- Frontend: SvelteKit
- Styling: TailwindCSS
- Backend: Juno.build
- Build Tool: Vite

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or the port Vite prints).

3. **Create a production build**
   ```bash
   npm run build
   npm run preview   # optional – serve the static build locally
   ```

4. **Deploy to Juno / Internet Computer**
   Ensure you have the Juno CLI installed globally:
   ```bash
   npm install -g @junobuild/cli   # one-time install
   ```

   Then run:
   ```bash
   juno deploy
   ```
   This will upload the static files in `build/` to your configured satellite (see `juno.config.json`).

---

### Scripts
| Command          | Description                               |
|------------------|-------------------------------------------|
| `npm run dev`    | Start the dev server with hot reload.     |
| `npm run build`  | Build the static site for production.     |
| `npm run preview`| Preview the production build locally.     |
| `juno deploy`    | Deploy the site to the Internet Computer. |

---

#### Juno Configuration
`juno.config.json` contains your satellite configuration. Edit the `satellite.id` field if you migrate to a new satellite.

```json
{
  "satellite": {
    "id": "svftd-daaaa-aaaal-adr3a-cai"
  },
  "networks": {
    "ic": {
      "providers": ["https://icp0.io"],
      "type": "persistent"
    },
    "local": {
      "type": "ephemeral"
    }
  }
}
```

---

### Folder Structure (simplified)
```
/ src
  ├─ routes/     // SvelteKit pages & layouts
  ├─ lib/        // Reusable components (Hero, Projects, Skills, Contact)
  └─ app.css     // Tailwind entry
```

Feel free to customize the components or Tailwind theme to make the site truly yours! 🎉