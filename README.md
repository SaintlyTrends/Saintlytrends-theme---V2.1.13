# Saintly Shopify Themes

A starter monorepo containing two lightweight, Online Store 2.0–compatible Shopify themes for **SAINTLY**.

- **saintly-classic** — clean white/black with red accents (brand palette).
- **saintly-red** — bolder red-forward visual with the same components.

These are intentionally minimal and production-safe foundations with clear section/snippet structure so your team can expand quickly.

## Quick start

1. In Shopify Admin → **Online Store → Themes**, click **Add theme → Upload zip** and upload either theme folder compressed as a zip, or the provided `dist` zips.
2. Edit theme settings in **Customize**:
   - Upload the Saintly logo (SVG/PNG).
   - Adjust colors under **Theme settings → Colors** (brand: white `#FFFFFF`, black `#000000`, red `#D21F3C`, light gray dividers `#EDEDED`).
   - Set typography per brand guidelines.
3. Home page is built with JSON sections: Hero → Featured collections → Rich text.

## Dev tips

- Sections live in `/sections`, reusable bits in `/snippets`, global layout in `/layout/theme.liquid`.
- Assets (`.css`, `.js`, images) live in `/assets`.
- Settings schema is defined in `/config/settings_schema.json` with presets per theme.
- JSON templates (OS 2.0) live under `/templates`.

## Local development (optional)
- You can use **Theme Kit** or **Shopify CLI** if you want hot reload.
- Run **Theme Check** locally if using Ruby: `gem install theme-check && theme-check`.

## License
MIT © Saintly Trends Pvt. Ltd.
