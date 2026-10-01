# Nasha Escuela — Spanish learning landing

Static RU/ES landing built with Astro and Tailwind CSS.

The current design uses three generated, explicitly illustrative WebP photographs and lightweight CSS/IntersectionObserver reveal animations. The generated people depict generic adults, not current school staff or confirmed students. The motion is disabled for reduced-motion preferences.

## Local development

1. Install Node.js 20.19+ (Node.js 24 is supported).
2. Run `npm install`.
3. Run `npm run dev`.

Routes: `/es/`, `/ru/`, `/es/privacidad/`, `/ru/konfidencialnost/`, `/es/cookies/`, and `/ru/cookies/`.

Set `PUBLIC_SITE_URL` to the approved production origin before building. It supplies absolute canonical, hreflang, robots and sitemap URLs. Without it, the build leaves canonical links unset and sitemap URLs are relative; that build is for local preview only.

The trial-form dialog is a front-end preview with name and telephone fields. It does not send or store data until both `PUBLIC_LEAD_ENDPOINT` and an approved `PUBLIC_PRIVACY_POLICY_URL` are configured. The endpoint must accept a JSON POST and allow the site's origin via CORS. The verified telephone link remains available as the live inquiry path. Legal pages are `noindex` draft notices and must be replaced with approved policies before launch. Layout reference PNGs and generated people were not shipped.

## Owner items before launch

- Confirm current course configuration or keep individual unknowns omitted.
- Test the live phone journey and decide whether to add a verified form/contact channel.
- Approve the legal controller, privacy text, cookies and analytics/consent configuration.
- Set the production domain in `PUBLIC_SITE_URL` and review the final site on mobile and desktop.
- Provide approved real school/teacher imagery if documentary photography is desired.
