# Security and launch notes

This is a static storefront preview. Tea cards and the quote bag run in the browser. They do not create an order, reserve stock, store personal data, calculate a binding price, or take payment.

## Current preview safeguards
- A restrictive Content Security Policy is declared in the HTML for scripts, styles, images, forms and object embeds.
- Product names and details are rendered as text, and the enquiry message is URL encoded before opening WhatsApp.
- The enquiry form validates basic fields in the browser. This is a convenience only, not trusted validation.
- No card number, CVV, bank credential or payment secret is requested by this preview.

## Required before production checkout
1. Serve over HTTPS and set response headers at the hosting layer. At minimum configure a reviewed Content-Security-Policy, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and `frame-ancestors` / clickjacking protection. HTML meta tags cannot replace all response headers.
2. Add a backend. Keep the product catalogue, inventory, final prices, discounts, tax, shipping and order status authoritative on the server. Recalculate every total on the server; never accept a browser-supplied amount as payment truth.
3. Integrate a reputable payment provider in its hosted/redirect checkout mode. Create payment sessions on the server, verify signed webhooks, make order creation idempotent, and never collect or log raw card details.
4. Enforce India-only sales on the server and with the payment provider (country, address and payment-method checks). Browser geolocation or client-side checks can be blocked or spoofed and are not a security boundary.
5. Add server-side input validation, CSRF protections where cookies are used, abuse/rate limiting, secure session cookies, least-privilege secrets, logging/alerting, backups, dependency updates, and a privacy/retention policy before storing customer data.
6. Confirm actual products, pack sizes, stock, prices, delivery rules, business registration and customer policies with the business owner before launch.

No website can guarantee that attacks will never happen. Production security depends on the deployed hosting, backend, payment provider configuration and ongoing maintenance.

The login and signup pages are visual previews only. Their forms intentionally do not authenticate, transmit, or persist account data. Implement secure server-side authentication, session management, password hashing, abuse protection, recovery flows, and privacy controls before enabling account access.
