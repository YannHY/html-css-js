---
tags: [HTML, CSS]
author: [Yann Houry]
date: 10-01-2022
---

Pour maîtriser grid, vous pouvez vous entraîner avec ce jeu disponible sur [codepip](https://codepip.com/games/).

![[grid-garden.png | 600]]

Comme pour [Flexbox Froggy](https://flexboxfroggy.com/), vous devez placer des éléments.

C'est ici un potager dans lequel vous devez arroser des légumes. On commence avec la propriété `grid-column-start`.

```CSS
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column-start:3;
}
```

