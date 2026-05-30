# 🅿️ Pàrquing Familiar

App per compartir l'estat de **2 pàrquings** en temps real amb qui vulguis.

## Com funciona

- Un **servidor WebSocket** (Node.js) manté l'estat dels parkings
- L'**app web** es connecta al servidor i rep canvis a l'instant
- No cal que estigueu a la mateixa xarxa

## Per executar en local (proves)

```bash
npm install
node server.js
```

Obre `index.html` al navegador (o amb un servidor estàtic: `npx serve .`)

## Per posar-ho en producció (gratis)

### Opció 1: Render (recomanat, 2 clics)

1. **Puja el codi a GitHub:**
   ```bash
   echo "# parking-familiar" >> README.md
   git init
   git add .
   git commit -m "Primer commit"
   git branch -M main
   git remote add origin https://github.com/TEUSR/parking-familiar.git
   git push -u origin main
   ```

2. **Ves a** https://render.com i crea un compte (gratis)

3. **Crea un Web Service:**
   - Botó blau "New +" > "Web Service"
   - Connecta el teu repositori de GitHub
   - **Name:** `parking-familiar`
   - **Start Command:** `node server.js`
   - **Plan:** Free
   - Clica "Create Web Service"

4. **Espera 2-3 minuts** que faci el deploy. Obtindràs una URL com:
   ```
   https://parking-familiar.onrender.com
   ```

5. **Configura l'app:**
   - Obre `index.html`
   - Canvia `SERVER_URL` per la teva URL de Render:
     ```javascript
     const SERVER_URL = "wss://parking-familiar.onrender.com";
     ```
   - Puja el canvi a GitHub (es redeploy automaticament)

6. **On pujar l'HTML:** Pots usar **Render** també (Static Site), o **GitHub Pages**, o **Vercel**, o **Netlify** — tots gratis.

### Opció 2: Railway

1. Puja el codi a GitHub
2. Ves a https://railway.app
3. "New Project" > "Deploy from GitHub repo"
4. La URL serà `https://parking-familiar.up.railway.app`

## Compartir

Un cop tot desplegat, comparteix la URL de l'app (no la del servidor) amb qui vulguis per WhatsApp. Tothom veurà els canvis en temps real.

## Tecnologies

- **Servidor:** Node.js + `ws` (WebSocket)
- **Client:** HTML + CSS + JavaScript vanilla
- **Hosting:** Render / Railway / on vulguis

## Estructura

```
parking-familiar/
├── index.html        # App web (obre-la al mòbil)
├── server.js         # Servidor WebSocket
├── package.json
├── manifest.json     # Per instal·lar com a app
└── .gitignore
```
