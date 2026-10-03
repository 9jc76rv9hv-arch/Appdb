# Glucose & Koolhydraten (mg/dL ⇄ mmol/L + carb counting)

**Open de app:** https://9jc76rv9hv-arch.github.io/Appdb/

A small phone app for people with diabetes (and their carers) to convert blood glucose
between **mg/dL** and **mmol/L** in both directions.

- Type in either field; the other updates instantly (comma or dot as decimal separator).
- Colour-coded result using the International Consensus on Time in Range
  (very low < 3.0 · low 3.0–3.8 · in range 3.9–10.0 · high 10.1–13.9 · very high > 13.9 mmol/L).
- Tap-to-load reference table, Dutch and English, light and dark mode.
- Installable on the home screen and works offline (Progressive Web App).
- **Carbs tab** (Koolhydraten):
  - Search about 85 common Dutch and Spanish dishes, snacks, fruit and drinks (in NL, ES or EN names) with typical carbs per portion (`meals.js`).
  - *My plate* adds up the carbs of everything you pick; use − / + to change portions in half steps.
  - Label calculator: carbs per 100 g × grams eaten.
  - Photo estimate: take a photo before eating and Claude (Anthropic) estimates the weight and carbs of each part.
    Each user enters their own Anthropic API key under *Instellingen fotoherkenning*; it is stored only on that device
    and the photo is sent directly from the phone to the Anthropic API (roughly 2–5 cents per photo).
    The SDK is bundled in `vendor/anthropic-sdk.js` (`@anthropic-ai/sdk` 0.131.0, MIT).
- Interface in Dutch, Spanish and English.

Conversion: `mg/dL = mmol/L × 18.016`, `mmol/L = mg/dL ÷ 18.016`.

> A calculation aid only, not medical advice. Carb values and photo estimates are approximations.

## Put it on your phone (and share it)

The app is plain static files (`index.html`, `app.js`, `meals.js`, `vendor/`, `manifest.webmanifest`, `sw.js`, `icons/`), so any HTTPS host works.
With GitHub Pages:

1. Merge this branch into the default branch.
2. In the repository go to **Settings → Pages**, choose **Deploy from a branch**, pick the default branch and `/ (root)`.
3. Open the address GitHub shows (e.g. `https://<user>.github.io/<repo>/`) on your phone and share it with others.
4. Install it:
   - **iPhone (Safari):** Share button → **Zet op beginscherm / Add to Home Screen**.
   - **Android (Chrome):** tap **Installeren** in the app, or menu ⋮ → **App installeren**.

After the first visit it keeps working without internet.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
