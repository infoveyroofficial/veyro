# Veyro — distinct by design

A complete static agency showcase with three original, interactive fictional business concepts. No install step, framework, database, backend, external font, stock-photo request, or paid dependency is needed.

## Open in Visual Studio Code

1. Extract the ZIP, then choose **File → Open Folder** and select `veyro`.
2. Open `index.html` in your browser for an immediate preview, or use VS Code's Live Server extension.
3. If Node.js 20+ is installed, run `npm run dev` in the integrated terminal and visit `http://127.0.0.1:4173`.
4. `npm run build` validates the pages and produces the deployable `dist/` directory. `npm run check` checks without copying files. No `npm install` is needed.

## Pages

| File | Experience |
| --- | --- |
| `index.html` | Veyro agency and concept portfolio |
| `pricing.html` | Complete comparison, differences filter, Care cost calculator and FAQs |
| `contact.html` | Direct FormSubmit email inquiry and local text download |
| `starter.html` | SŌL café: focused one-page site, menu, story and inquiry CTA |
| `business.html` | Atelier Nūn: editorial portfolio, category filters and keyboard-accessible project dialogs |
| `premium.html` | Sahra: immersive hospitality, suite carousel and date-validated stay preview |
| `privacy.html` | Privacy explanation for the actual static-site behavior |

The demo pages illustrate different design directions. Plan page counts are maximum project scope, not claims that each concept includes that many pages. All businesses, architecture, menu prices and hospitality offerings in demos are fictional. Artwork is original local SVG illustration. No testimonials or client claims are made.

## Contact and branding

All contact settings are in `assets/config.js`. Empty values are deliberate placeholders; the page offers a brief download until a real email is configured. Do not put passwords, API keys or other secrets here: every static file is public.

- `email`: real public business address. The inquiry posts to FormSubmit, which forwards submissions to this address after the owner activates it. The first submission triggers a confirmation email: open it and activate the form before accepting inquiries. A spam check remains enabled. `thanks.html` is the return page. If changing email, also update the HTML form action for visitors without JavaScript and complete activation for the new address.
- `whatsapp`: country code and number, digits only. An empty value hides the WhatsApp link.
- `tallyUrl`: optional public `https://tally.so/r/FORMID` URL. This adds a separately labeled external form link; it does not silently send data.
- `logoUrl`: relative local image path, such as `assets/my-logo.svg`. Empty keeps the Veyro typographic logo.

Ask your assistant to update these settings if you prefer not to edit code. Style colors are CSS variables at the beginning of `assets/style.css`. All content is readable HTML. Contact submissions are processed by FormSubmit and delivered to the configured inbox; this static site has no inquiry database. Update `privacy.html` if you enable analytics, hosted forms or new services.

## GitHub Pages deployment — exact steps

These steps use GitHub's built-in **Deploy from a branch** method. No Actions workflow or build configuration is required.

1. Sign in to the GitHub account that will own the site.
2. Create a **public** repository named `veyro`. Keep the initial repository empty, or initialize with a README if using the GitHub web upload interface.
3. Upload the **contents** of this `veyro` folder to the repository root. `index.html` and `assets/` must be at the top level, not inside a second `veyro` folder. Include `.nojekyll` when uploading through Git; the site also uses ordinary HTML/CSS/JS filenames compatible with Pages.
4. Commit to `main`.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Under **Branch**, select **main**, select **/(root)**, and click **Save**.
8. Wait for the **pages build and deployment** workflow in the **Actions** tab to complete. **Settings → Pages** shows the published URL.
9. The usual URL is `https://YOUR-USERNAME.github.io/veyro/`. Open it and check the three demo links and pricing calculator.

For a user site at `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io` instead. Every internal path is relative and works at either location. A custom domain is optional, purchased separately, and should remain in the client's account. No custom domain is configured in this package.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Publishing requires suitable repository permissions. Use an eligible account and involve a parent or guardian wherever an account, paid service or contract requires it. This project does not require a paid subscription.

## Scope and honest behavior

- Starter: EGP 5,000 once; optional EGP 1,800/month Care; one page, two revisions, up to 15 minutes monthly minor edits with Care.
- Business: EGP 8,500 once; optional EGP 2,000/month Care; up to five pages, three revisions, 30 minutes monthly edits and health report with Care.
- Premium: EGP 15,000+ once; optional EGP 3,500/month Care; up to eight pages, four revisions, 90 minutes monthly edits and monthly report with Care.
- Domain fees and paid integrations are separate. Hosting arrangements and third-party costs are agreed before launch. Monthly management is optional.
- Stay preview does not check availability or book anything. Maps are not faked for a nonexistent business. Analytics are not installed on this showcase. A production client project can configure these after agreeing the scope and real business details.
- Browser-native dialogs support Escape and focus management. Mobile navigation, visible focus styles, skip links and reduced-motion preferences are supported.

## Maintenance

Update files on `main` to redeploy. Run `npm run build` before publishing changes. Test at phone and desktop widths. `dist/` is generated and intentionally ignored by Git; branch deployment serves the source files in the repository root.

## Form delivery activation

Direct submission is connected to FormSubmit. The inbox owner must follow the activation email sent by FormSubmit to enable delivery. Check Spam as well as Inbox. After activation, submit one clearly labeled test and confirm receipt. No paid account or custom backend is required. Email delivery has not been independently confirmed from inside the mailbox.
