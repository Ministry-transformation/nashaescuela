# Build and release status

**Build:** completed with Astro 7.3.5 and Tailwind CSS 4.3.5.  
**Launch:** blocked pending owner and production configuration.

## Implemented

- Astro static site with `/es/` and `/ru/` locale pages and reciprocal language switch.
- Spanish Pop v02 inspired responsive layout using the approved production-safe graphic assets. Reference PNGs and mockup people are excluded.
- Three generated, optimized WebP lifestyle photos are used with visible “illustrative photo” labels and localized alt text.
- Lightweight entrance/hover motion uses CSS and IntersectionObserver, with a reduced-motion fallback.
- Localized page copy, current-group inquiry state, FAQ, address, directions link, and verified telephone CTA.
- EducationalOrganization JSON-LD, noindex legal draft routes, robots and sitemap endpoints.
- No form, WhatsApp, review data, ratings, course level, schedule, price, teacher identity or analytics claims are enabled.

## Checks and limitations

- Dependencies installed successfully using the system certificate store; TLS verification stayed enabled.
- `npm run check` passes with zero errors, warnings or hints.
- `npm run build` succeeded; Astro generated all seven pages.
- Preview checks returned HTTP 200 for `/es/` and `/ru/`, with the expected locale titles and three telephone links each.
- Reviewed the in-app mobile preview at 304px; no horizontal page scrollbar remains, and the CTA stays within the viewport.
- Automated accessibility scan and desktop performance audit remain unverified.
- Set `PUBLIC_SITE_URL` to the approved domain before building for production. Without it, pages are noindex and the sitemap endpoint reports that the site URL is required.
- The phone journey, legal/cookie text, consent setup, final responsive visuals and owner-approved proof media still require review before launch.

## Owner tasks

1. Confirm current group facts, or continue to answer them by inquiry without publishing unknown details.
2. Confirm the responsible legal entity/controller and approve privacy/cookie content.
3. Verify the telephone inquiry journey and decide whether any form or additional contact channel should be enabled.
4. Confirm the production domain and set `PUBLIC_SITE_URL`.
5. Review the built site at mobile and desktop sizes and provide approved real school/teacher imagery if desired.
