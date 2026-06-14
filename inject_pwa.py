# Ajoute l'icône + les métadonnées "web app" (à installer sur téléphone) dans index.html.
# Lancer : py -3 inject_pwa.py
import base64, io, json, urllib.parse
from PIL import Image, ImageDraw, ImageFont

def png_icon(sz):
    img = Image.new("RGBA", (sz, sz), (10, 14, 26, 255))
    d = ImageDraw.Draw(img)
    m = int(sz * 0.13)
    d.ellipse([m, m, sz - m, sz - m], outline=(232, 195, 114, 255), width=max(3, int(sz * 0.035)))
    try:
        f1 = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", int(sz * 0.36))
        f2 = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", int(sz * 0.17))
    except Exception:
        f1 = ImageFont.load_default(); f2 = f1
    def centered(txt, font, cy, fill):
        b = d.textbbox((0, 0), txt, font=font)
        w = b[2] - b[0]; h = b[3] - b[1]
        d.text(((sz - w) / 2 - b[0], cy - h / 2 - b[1]), txt, font=font, fill=fill)
    centered("TI", f1, sz * 0.40, (232, 195, 114, 255))
    centered("IV", f2, sz * 0.66, (95, 208, 216, 255))
    buf = io.BytesIO(); img.save(buf, "PNG", optimize=True); return buf.getvalue()

apple = "data:image/png;base64," + base64.b64encode(png_icon(180)).decode()

svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">'
       '<rect width="512" height="512" fill="#0a0e1a"/>'
       '<circle cx="256" cy="256" r="188" fill="none" stroke="#e8c372" stroke-width="16"/>'
       '<text x="256" y="300" font-family="Arial,Helvetica,sans-serif" font-size="190" font-weight="bold" '
       'fill="#e8c372" text-anchor="middle">TI</text>'
       '<text x="256" y="408" font-family="Arial,Helvetica,sans-serif" font-size="92" font-weight="bold" '
       'fill="#5fd0d8" text-anchor="middle">IV</text></svg>')
svg_uri = "data:image/svg+xml," + urllib.parse.quote(svg)

manifest = {
    "name": "Twilight Imperium IV — Aide de jeu", "short_name": "TI4 Aide",
    "lang": "fr", "dir": "ltr", "display": "standalone", "orientation": "portrait",
    "background_color": "#0a0e1a", "theme_color": "#0a0e1a", "start_url": ".", "scope": ".",
    "icons": [{"src": svg_uri, "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable"}],
}
muri = "data:application/manifest+json," + urllib.parse.quote(json.dumps(manifest, ensure_ascii=False), safe="")

head = ("\n<!--PWA-->\n"
        '<meta name="theme-color" content="#0a0e1a">\n'
        '<meta name="apple-mobile-web-app-capable" content="yes">\n'
        '<meta name="mobile-web-app-capable" content="yes">\n'
        '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n'
        '<meta name="apple-mobile-web-app-title" content="TI4 Aide">\n'
        '<link rel="apple-touch-icon" href="%s">\n'
        '<link rel="icon" type="image/svg+xml" href="%s">\n'
        '<link rel="manifest" href="%s">\n') % (apple, svg_uri, muri)

html = open("index.html", encoding="utf-8").read()
if "<!--PWA-->" in html:
    print("déjà injecté")
else:
    html = html.replace("</title>", "</title>" + head, 1)
    open("index.html", "w", encoding="utf-8").write(html)
    print("PWA injecté. apple-icon:", len(apple), "o | manifest:", len(muri), "o")
