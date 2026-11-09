# Chai Bagan Enterprise

Responsive static storefront preview for Chai Bagan Enterprise, based on the supplied business flyer.

## Preview
Open `index.html`, or run `python -m http.server 8000 --bind 127.0.0.1` from this folder and visit `http://localhost:8000`.

## Pages and interactions
- `index.html` — tea storefront, rotating hero photos, search/filter/sort collection, quote bag, Diwali offer, customer feedback form, FAQs, map and contact details.
- `login.html` and `signup.html` — account screen previews. Authentication is not connected and the forms never send or save credentials.
- `styles.css` and `script.js` — storefront appearance, theme switch, custom pointer, carousel, product catalogue, quote flow and review form.
- `account.css` and `account.js` — account preview pages.
- `netlify.toml` and `_redirects` — static hosting, security headers and clean account URLs.
- `NETLIFY.md` — deploy instructions; `PAYMENTS.md` and `SECURITY.md` — launch requirements.
- `assets/chai-bagan-flyer.jpeg` — supplied business flyer.

Products and images are illustrative; confirm stock, packaging, pricing and delivery before launch. `CHAI10` is an enquiry code: the static site does not calculate discounts or process payments. The map shows the Undera locality, not the exact storefront pin. Customer feedback is sent to the team for approval and is never published automatically.
