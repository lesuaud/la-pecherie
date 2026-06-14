# La Pêcherie — Site Web

Site web du restaurant **La Pêcherie**, bistrot poisson & viande au port d'Hourtin (Gironde).

Construit avec **Astro** + **Tailwind CSS**.

---

## Lancer en local

```bash
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:4321](http://localhost:4321).

---

## Modifier la carte (menu.json)

Éditez le fichier `src/data/menu.json`.

Chaque section contient :
- `id` : identifiant unique
- `titre` : affiché comme titre de section
- `specialite` : `true` pour le badge ⭐ (moules)
- `note` : texte informatif (ex: "Servies avec frites et pain")
- `items` : liste des plats

Chaque plat contient :
- `nom` : nom du plat
- `description` : détails (optionnel)
- `prix` : prix affiché (ex: `"14,90 €"`)
- `veggie` : `true` pour afficher le badge 🌿

---

## Modifier les horaires (horaires.json)

Éditez `src/data/horaires.json` pour mettre à jour :
- La période d'ouverture (`saison.debut` / `saison.fin`)
- Les horaires de service (`service.midi` / `service.soir`)
- Les jours de fermeture hors juillet-août

---

## Activer / désactiver le bandeau saisonnier

Dans `src/data/config.json` :

```json
"bandeau": {
  "actif": true,          // false pour masquer
  "message": "🎉 Ouvert pour la saison !",
  "type": "ouvert"        // "ouvert" = cyan, "ferme" = bleu marine
}
```

---

## Ajouter / remplacer des photos

Cherchez les commentaires `[À REMPLACER]` dans les composants :
- `src/components/Hero.astro` — photo principale
- `src/components/Etablissement.astro` — photo du restaurant
- `src/components/Moules.astro` — photo des moules
- `src/components/Galerie.astro` — 6 photos de la galerie

Remplacez les URLs Unsplash par vos vraies photos. Pour des performances optimales, hébergez vos images sur un CDN ou directement dans `/public/images/`.

---

## Déployer sur Netlify

1. Poussez votre code sur GitHub
2. Allez sur [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Sélectionnez votre repo
4. Netlify détectera automatiquement `netlify.toml`
5. Cliquez "Deploy site"

---

## Brancher un domaine

Dans Netlify : **Site settings → Domain management → Add custom domain**

---

## Brancher Netlify Forms

Le formulaire de réservation est déjà configuré avec `data-netlify="true"`.

Après le premier déploiement sur Netlify :
1. Allez dans **Forms** dans le dashboard Netlify
2. Le formulaire `reservation` apparaîtra automatiquement
3. Pour recevoir des notifications par email : **Forms → reservation → Settings → Email notifications**

---

## Structure du projet

```
src/
├── data/           # Données (menu, horaires, config)
├── layouts/        # Layout principal HTML
├── components/     # Composants Astro
└── pages/          # Pages (index, carte)
public/             # Fichiers statiques (favicon, logo, robots.txt)
```

---

## Contact restaurant

- Tél : 07 50 36 56 46
- Email : reservation.lapecherie.hourtin@gmail.com
- Port d'Hourtin, 33990 Hourtin
