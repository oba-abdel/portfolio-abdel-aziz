# Portfolio — Abdel Aziz Odjo-Oba

Portfolio professionnel en français, responsive, développé en HTML, CSS et JavaScript sans dépendance externe.

## Aperçu local

Depuis ce répertoire :

```sh
python -m http.server 4173 --directory dist
```

Ouvrir http://localhost:4173.

## Contenu

- `dist/index.html` : présentation, contributions, expertise, parcours et contact.
- `dist/style.css` : charte bleu nuit et citron, mises en page mobile et ordinateur.
- `dist/app.js` : navigation mobile, copie d’email et fenêtre de confidentialité.
- `dist/assets/` : favicon et CV téléchargeable fourni par le propriétaire.
- `.openai/hosting.json` : identité et configuration d’hébergement Sites.

Les contributions sont fondées sur le CV fourni. Les illustrations sont créées en CSS et explicitement distinguées des interfaces des clients. Aucun résultat chiffré, témoignage ou niveau d’expérience non documenté n’est ajouté.

## Publication

Le répertoire statique à publier est `dist`. Le site fonctionne sur tout hébergeur de fichiers statiques sans étape de compilation. Sites conserve une copie source dédiée ; le dépôt GitHub permet également de récupérer et de faire évoluer le portfolio.

Deux publications sont conservées :

- Sites : https://abdel-aziz-odjo-oba.bloomingfancy3.chatgpt.site/
- GitHub Pages : https://oba-abdel.github.io/

Le dépôt `oba-abdel/portfolio-abdel-aziz` reste la source du portfolio. Le dépôt `oba-abdel/oba-abdel.github.io` contient une copie de `dist`, publiée depuis la racine de sa branche `main`. Le fichier `.nojekyll` désactive le traitement Jekyll.

Après chaque modification, mettre à jour la publication Sites, puis synchroniser GitHub Pages avec `powershell -File scripts/publish-github-pages.ps1`. Le script attend le clone GitHub Pages dans le répertoire voisin `../github-pages`, ou un chemin fourni avec `-CheckoutPath`. Il vérifie le dépôt de destination avant de copier les fichiers, créer un commit et pousser la branche. Vérifier ensuite la réussite de la construction GitHub Pages.

Les deux sites utilisent les mêmes fichiers et le même CV. Le lien canonique reste dirigé vers la publication Sites afin de conserver une URL de référence pour les moteurs de recherche.

## Accessibilité et confidentialité

Navigation au clavier, lien d’évitement, menu avec état accessible, prise en compte du mouvement réduit, mise en page responsive et absence de scripts tiers ou d’outils de suivi.

Les actions de contact ouvrent le client de messagerie ou les profils professionnels. Aucun formulaire ne stocke de données.
