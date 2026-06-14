# Twilight Imperium IV — Aide de jeu (FR)

Aide de jeu **hors-ligne, en français**, pour Twilight Imperium 4e édition + extension *Prophecy of Kings* + Codex (Conseil Keleres). Terminologie de l'édition française (Guide de Référence + Livret).

## 🌐 Ouvrir / installer sur téléphone

Une fois **GitHub Pages** activé (voir plus bas), l'aide est en ligne ici :

> **https://mhuur.github.io/Twilight-Imperium-Aide-de-jeu/**

- **Sur le téléphone**, ouvre ce lien puis :
  - **iPhone** (Safari) : Partager → *Sur l'écran d'accueil*
  - **Android** (Chrome) : menu ⋮ → *Installer l'application* / *Ajouter à l'écran d'accueil*
- C'est une **PWA** : icône dédiée, plein écran, **fonctionne hors-ligne** après la première ouverture.

### Activer GitHub Pages (une seule fois)
**Settings → Pages → Source : _Deploy from a branch_ → branche `main` → dossier `/ (root)` → Save.** Le site est en ligne ~1 min après.

## 📦 Fichier autonome (sans serveur)
[`Twilight-Imperium-aide-de-jeu.html`](Twilight-Imperium-aide-de-jeu.html) est un **fichier unique** qui contient tout : il suffit de le double-cliquer (ou de l'envoyer à quelqu'un) pour l'ouvrir dans un navigateur, sans rien installer.

## 🧭 Contenu
- **Factions (25)** — nom FR + EN, compétences, unités & technologies de départ, Système Mère, leaders (Agent / Commandant / Héros), Méca, Vaisseau amiral, technologies de faction, Billet à ordre.
- **Cartes Stratégie (8)** — Gouvernance, Diplomatie, Politique, Construction, Commerce, Guerre, Technologie, Intrigue.
- **Planètes (62)**, **Unités** (stats + améliorations II).
- **Objectifs (80)**, **Projets (62 — lois & directives)**, **Reliques (13)**, **Exploration (30)**.
- **Déroulement** d'un round et **assistant de Draft** (tirage des factions).

## 🛠️ Modifier les données
Tout est dans [`data.js`](data.js). Après modification, régénère le fichier autonome :

```bash
node build-fichier-unique.js
```

## Notes
Données issues de sources communautaires de référence, recoupées ; quelques noms de factions de l'extension sont une meilleure approximation (le nom anglais reste affiché). Projet non officiel, à but d'aide de jeu — Twilight Imperium est une marque de Fantasy Flight Games.
