# Sahin Mondal — Portfolio (Frontend & Cloudflare Pages Functions)

React 19 + Vite 7 + Tailwind CSS portfolio with three project case studies and a serverless Cloudflare Pages Function (`functions/api/contact.js`) for contact form delivery.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # local development server (http://localhost:3000) + local /api/contact function
npm run build      # production build -> dist/
npm run preview    # preview production build locally + local /api/contact function
npm run lint       # ESLint
```

Requires **Node.js 20.19+ or 22.12+** (pinned to `22.12.0` in `.node-version`).

---

## Contact Form Architecture (Zero VPS / Free Cloudflare Tier)

```text
Frontend Contact Form (POST /api/contact)
        ↓
Cloudflare Pages Function (frontend/functions/api/contact.js)
        ↓
1. Origin, Content-Type & payload size check (<= 16 KB)
2. Honeypot anti-spam check (`website` field must be empty)
3. Per-IP sliding-window rate limit (5 requests / 15 minutes)
4. Server-side validation (Name, Email, Message)
        ↓
Resend HTTP Email API (https://api.resend.com/emails)
        ↓
Delivers inquiry to sahinmondal7@gmail.com
```

- **No VPS or Express server required**: Cloudflare Pages automatically deploys `frontend/functions/api/contact.js` as a serverless Edge Function at `/api/contact` on the same domain as your portfolio.
- **No fake success**: If `RESEND_API_KEY` is not configured yet or the email API returns an error, `/api/contact` responds with HTTP `503`/`502` and the UI displays an honest error message with a direct `mailto:sahinmondal7@gmail.com` fallback link.
- **No secrets in frontend code**: `RESEND_API_KEY` lives exclusively in Cloudflare Pages server-side secrets (and locally in `frontend/.dev.vars`, which is gitignored and never bundled by Vite).

---

## Environment Variables & Secrets

### 1. Build-Time Variable (Frontend)

Configure in **Cloudflare Dashboard → Workers & Pages → `<Your Project>` → Settings → Variables and Secrets** (or `frontend/.env` locally):

| Variable | Type | Required | Purpose |
| --- | --- | --- | --- |
| `VITE_SITE_URL` | Plaintext | Yes (production) | Public site origin, e.g. `https://sahinmondal.com`. Used for canonical URLs, Open Graph/Twitter tags, JSON-LD, `robots.txt` and `sitemap.xml`. Defaults to `https://sahinmondal.com`. |
| `VITE_API_BASE_URL` | Plaintext | Optional | Leave **empty** on Cloudflare Pages so the form posts to same-origin `/api/contact`. |

### 2. Runtime Variables & Secrets (Cloudflare Pages Function `/api/contact`)

Configure in **Cloudflare Dashboard → Workers & Pages → `<Your Project>` → Settings → Variables and Secrets** (for both **Production** and **Preview** environments):

| Variable | Type | Required | Value / Purpose |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | **Secret** (Encrypted) | **Yes** | Your API key (`re_...`) from [Resend](https://resend.com) (Free tier: 3,000 emails/month, 100/day). **Must remain secret.** |
| `CONTACT_TO_EMAIL` | Plaintext | Optional | Recipient email address. Defaults to `sahinmondal7@gmail.com`. |
| `CONTACT_FROM_EMAIL` | Plaintext | Recommended | Verified sender in Resend, e.g. `Portfolio Contact <contact@sahinmondal.com>` (or `Portfolio Contact <onboarding@resend.dev>` while testing before domain verification). |
| `ALLOWED_ORIGIN` | Plaintext | Optional | Optional origin lock, e.g. `https://sahinmondal.com`. |

---

## Local Development & Testing

1. Run `npm run dev` (or `npm run build && npm run preview`) inside `frontend/`.
2. Vite's built-in middleware (`cloudflarePagesContactPlugin` in `vite.config.js`) automatically mounts `frontend/functions/api/contact.js` at `/api/contact`—no separate backend server is needed.
3. **Without `.dev.vars`**: Submitting the form executes full client + server validation, honeypot checks, and returns HTTP `503` with the honest fallback error message (since `RESEND_API_KEY` is unconfigured).
4. **With `.dev.vars` (Real Email Delivery)**:
   - Copy `frontend/.dev.vars.example` to `frontend/.dev.vars`.
   - Set `RESEND_API_KEY=re_...` in `frontend/.dev.vars`.
   - Submit the form to test real end-to-end email delivery locally.

---

## Deploying to Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | `Vite` (or `None`) |
| Root directory | `frontend` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22.12.0` (automatically read from `.node-version`) |
