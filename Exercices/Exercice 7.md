---
tags: [HTML, CSS]
author: [Yann Houry]
date: 09-01-2022
---

# Exercice 7
Pour maîtrise [[3.1 Flexbox (introduction) |flexbox]], je vous recommande de jouer à ce jeu tout en regardant la documentation de MDN ([flex](https://developer.mozilla.org/fr/docs/Web/CSS/flex)) :

[Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/)

![](https://github.com/YannHY/html-css-js/blob/main/Images/flexbox-froggy.png)

Le principe est simple. 

- L'étang est le conteneur flex.
- La grenouille et le nénuphar sont les éléments flex.

Vous devez, dans ce premier exercice, déplacer la grenouille sur le nénuphar en utilisant la propriété `justify-content` dont les valeurs sont précisés en-dessous des consignes ([documentation complète sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/justify-content)).

Les voici au cas où :

```CSS
    flex-start: Items /*Aligne à gauche du conteneur*/
    flex-end: Items /*Aligne à droite du conteneur*/
    center: Items /*Affiche avec une distance égale entre les éléments*/
    space-between: Items /*Affiche avec une distance égale entre les éléments*/
    space-around: Items /*Affiche avec une distance égale autour des éléments*/
```

Dans le premier exercice, il faut simplement écrire :

```CSS
justify-content: flex-end;
```

Vous pouvez aussi regarder cette vidéo expliquant le jeu :

<iframe width="560" height="315" src="https://www.youtube.com/embed/OmHPegyY3UU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

