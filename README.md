# FSFINDS

Curated finds from partner sellers, ordered through CSSBuy.

## Files
- `index.html`: public site
- `admin.html`: admin panel (sign in with your Supabase admin account)
- `ProductCardV4.dc.html`: product card used by the site
- `support.js`: page runtime (required)
- `fsf-i18n.js`: English → Portuguese translations
- `assets/`: logo and favicon
- `supabase-setup.sql`: database setup

## Setup
1. Create a Supabase project and run `supabase-setup.sql` in the SQL Editor.
2. Create your admin user in Authentication → Users, then run the admin-role update at the end of step 2 in the SQL file.
3. The Supabase Project URL and anon key are already set in `index.html` and `admin.html` (`SB_URL` / `sbUrl()`).
4. In Supabase → Authentication → URL Configuration, set Site URL to your domain and add `https://YOUR-DOMAIN/account` to Redirect URLs.

## Routes
- `/` home · `/shop` (`?cat=shoes&q=jordan`) · `/sellers` · `/sellers/{id}` · `/product/{id}`
- `/tools/tracker` · `/tools/qc` · `/tools/size` · `/tools/converter`
- `/account` member area · `/admin` admin panel

Rewrites are in `vercel.json` (Vercel) and `_redirects` (Netlify / Cloudflare Pages).

## Deploy
Static site: upload this folder to GitHub and connect it to Vercel, Netlify or Cloudflare Pages. No build step needed.

## Media & catalog on GitHub
Photos, videos and `data/catalog.json` are committed to this repo by the Supabase Edge Function `supabase/functions/github-media`.
1. GitHub → Settings → Developer settings → Fine-grained tokens → new token, only this repo, **Contents: Read and write**.
2. Supabase → Edge Functions → Deploy a new function → name `github-media` → paste `supabase/functions/github-media/index.ts` → Deploy.
3. Supabase → Edge Functions → Secrets: `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` (optional `GITHUB_BRANCH`, `MEDIA_BASE_URL` for private repos).
4. Run `supabase-setup-qc.sql` in the SQL Editor.
5. In /admin, edit finds, then press **Publish to GitHub**. The host redeploys and the site picks it up.

Files are served through jsDelivr (public repo, max 20 MB per file). Videos up to 15 MB.
