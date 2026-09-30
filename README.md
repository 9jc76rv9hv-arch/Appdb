# Glucose omrekenen (mg/dL ⇄ mmol/L)

**Open de app:** https://9jc76rv9hv-arch.github.io/Appdb/

A small phone app for people with diabetes (and their carers) to convert blood glucose
between **mg/dL** and **mmol/L** in both directions.

- Type in either field; the other updates instantly (comma or dot as decimal separator).
- Colour-coded result using the International Consensus on Time in Range
  (very low < 3.0 · low 3.0–3.8 · in range 3.9–10.0 · high 10.1–13.9 · very high > 13.9 mmol/L).
- Tap-to-load reference table, Dutch and English, light and dark mode.
- Installable on the home screen and works offline (Progressive Web App).

Conversion: `mg/dL = mmol/L × 18.016`, `mmol/L = mg/dL ÷ 18.016`.

> A calculation aid only, not medical advice.

## Put it on your phone (and share it)

The app is plain static files (`index.html`, `manifest.webmanifest`, `sw.js`, `icons/`), so any HTTPS host works.
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
