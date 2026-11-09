# Deploying on Netlify

This static project is ready for a manual Netlify deploy. It has no build command; `index.html` is at the project root. The `netlify.toml` file sets the publish directory and response security headers.

## Quick deploy with Netlify Drop
1. Open [Netlify Drop](https://app.netlify.com/drop) and sign in to the Netlify team you want to use.
2. Drag the entire `Chai Bagan Enterprise` project folder into the deploy area. Do not drag only the `assets` folder.
3. Wait for Netlify to finish the upload, then open the `*.netlify.app` preview URL.
4. Check the home page, `/login`, `/signup`, tea catalogue, quote bag, WhatsApp links and map on desktop and mobile.
5. In Netlify, choose a site name and add your custom domain later if you have one.

To publish updates, drag the same project folder into the site deploy area again. For automatic deploys after each code change, place this folder in a Git repository and connect that repository from Netlify.

## Before a public launch
- Replace sample stock photos with approved product photography and verify image licensing.
- Confirm seasonal discount dates, eligible products, and terms with the business owner. `CHAI10` is currently a quote-request code; the static quote basket does not calculate or apply discounts.
- Connect real authentication and customer/order storage. The login and signup pages are previews only.
- Select a payment provider, complete merchant onboarding, and add provider API credentials to Netlify environment variables. Never put secret API keys in HTML or browser JavaScript.
- Create payment orders on a server/Netlify Function using server-verified product prices, and verify payment-provider webhooks before marking orders paid.
- Confirm the exact shop map pin, product assortment, prices, privacy text and reviews.
