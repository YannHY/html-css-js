---
tags: [CSS, grid]
author: [Jonas Schmedtmann]
date: [21-11-2021]
---

# Grid (notes)
Notes prises durant l'écoute du cours [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/share/101Wtc3@sgrppz3UDr4S6-dvSFLOKP5Arb7ULD8F-YwVDO7Lx6kIdeKOMiOIuQ6SPAUJIhUj/)

Voir aussi [html-css-course](https://github.com/jonasschmedtmann/html-css-course)

## What is CSS GRID?
- CSS Grid is a set of CSS properties for ==building 2-dimensional layouts==
- The main idea behind CSS Grid is that we divide a container element into rows ans columns that can be filled with its child elements
- In 2-dimensional contexts, CSS Grid allows us to write less nested HTML and easier-to-read CSS.
- CSS Grid is not meant to replace flexbox! Instead, they work perfectly together. ==Need a 1D layout? Use flexbox. Need a 2D layout? Use CSS Grid==

### 1D layout
![](https://github.com/YannHY/html-css-js/blob/main/Images/2D-flexbox.jpg)

### 2D layout
![](https://github.com/YannHY/html-css-js/blob/main/Images/3D-grid.jpg)

Like with flex box, we have a grid container and grid items.
And as with flex box, we have a column axis and a row axis.

We also have:
- grid lines
- grid cell (might be filled by a grid item or not)
- gutters (gaps between the grid cell and the grid lines)
- grid track (can be a row or a column)

### Grid Container
- grid-template-rows: `<track size>`
- grid-template-columns: `<track size>`
To establish the grid row and column tracks. One length unit for each track. Any unit can be used, new fr fills unused space.

- row-gap: 0 | `<legnth>`
- column-gap: 0 | `<legnth>`
To create empty space between tracks

- justify-items: stretch | start | center | end
- align-items: stretch | start | center | end
To align items inside rows / columns (horizontally / vertically)

- justify-content: start | start | center | end | ...
- align-content: start | start | center | end | ...
To align entire grid inside grid container. Only applies if container is larger than the grid

### Grid Items
- grid-column: `<start line>` / `<end line>` | span `<number>`
- grid-row: `<start line>` / `<end line>` | span `<number>`
To place a grid item into a specific cell, based on line numbers. `span` keyword can be used to span an item across more cells

- justify-self: stretch | start | center | end | ...
- align-self: stretch | start | center | end | ...
To overwrite justify-items / align-items for single items

## A Simple example

```css
.container--1 {
font-family: sans-serif;
background-color: #ddd;
font-size: 30px;
margin: 40px;

/* CSS GRID */
display: grid;
grid-template-columns: 200px 200px 100px 100px;
grid-template-rows: 300px 200px;
/* gap: 30px; */
column-gap: 30px;
row-gap: 60px;
}
```
![](https://github.com/YannHY/html-css-js/blob/main/Images/grid.png)

## FR
A very new unit: `fr` (to create flexible rows and flexible columns).

`1fr` stands for "fractional" or just "fraction". It avoids you to specify the width manually.

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-1-fr.png)

All columns will have the same size:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

### 2 columns
```css
grid-template-columns: 1fr 1fr;
```

### 1 column
```css
grid-template-columns: 1fr;
```

If we change the size of the first column:

```css
grid-template-columns: 2fr 1fr 1fr 1fr;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-2-fr.png)

Instead of writing this (`grid-template-columns: 2fr 1fr 1fr 1fr;`), we have a function:

```css
grid-template-columns: repeat(4, 1fr);
```

If we say "auto" on the fourth column, then it will only take the exactly size that is necessary to fill it's content:

```css
grid-template-columns: 1fr 1fr 1fr auto;
```

You can use `fr` on rows too but you need to specify a height:

```css
.container--1 {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr 1fr;
height: 600px;
column-gap: 10px;
row-gap: 40px;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/rows-fr.png)

The 'auto' keyword can be used too:

```css
grid-template-rows: 1fr auto;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-rows-auto.png)

## Placing and Spanning Grid Items
We are going to move the eighth element and put it to the second place.

CSS says we should start at column number 2 and end column number 3.

```css
.el--8 {
grid-column: 2 / 3;
}
```

Don't pay attention to the negative values.

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-inspector.png)

```css
grid-column: 2 / 3;
grid-row: 1 /2;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-column-row.png)

```css
.el--2 {
grid-column: 1 / 2;
grid-row: 2 / 3;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-column-row-2.png)

If the value following the first one is only one more than the first, we can omit it:

```css
.el--2 {
grid-column: 1;
grid-row: 2;
}
```

But if we write this:

```css
.el--2 {
grid-column: 1 / 3;
grid-row: 2 / 3;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-column-row-3.png)

```css
.el--2 {
grid-column: 1 / 4;
grid-row: 2 / 3;
}
```

It's written 4 but it covers 3 cells. 

instead of specifying the final value of the grid line, we can simply say:

```css
.el--2 {
grid-column: 1 / span 3;
grid-row: 2 / 3;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-column-row-4.png)

We can either write (if we want to avoid to manually spanning and if we want a element to span all the way to the end):

```css
.el--2 {
grid-column: 1 / span 4;
grid-row: 2 / 3;
}
```

or

```css
.el--2 {
grid-column: 1 / -1;
grid-row: 2 / 3;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-minus-1.png)

We can create a new row:

```css
.el--6 {
grid-row: 3 / 6;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/new-row.png)

## Aligning Grid Items and Tracks
### Aligning Tracks Inside the Container
```css
.container--2 {
font-family: sans-serif;
background-color: black;
font-size: 40px;
margin: 40px;
width: 700px;
height: 600px;

/* CSS GRID */
display: grid;
grid-template-columns: 125px 200px 125px;
grid-template-rows: 250px 100px;
gap: 50px;
justify-content: center;
/* justify-content: space-between; */
align-content: center;
/* align-content: end; */
/* align-content: start; */
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-align-center.png)

### Aligning Items Inside cells
Moving items around inside cell

```css
.container--2 {
font-family: sans-serif;
background-color: black;
font-size: 40px;
margin: 40px;
width: 700px;
height: 600px;

/* CSS GRID */
display: grid;
grid-template-columns: 125px 200px 125px;
grid-template-rows: 250px 100px;
gap: 50px;

/* Aligning tracks inside container: distribut empty space */
justify-content: center;
/* justify-content: space-between; */
align-content: center;
/* align-content: end; */
/* align-content: start; */

/* Aligning Items Inside cells: moving items around inside cell */
align-items: center; /*By default, aling-items is stretch. There is also start and end*/
justify-items: center;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/grid-align-items-center.png)

We can overwrite the `align-items` or the `justify-items` properties (like in flex-box) to target one individual item:

```css
.el--3 {
align-self: end;
justify-self: end;
}
```

## A Reusable Grid
```html
<section class="section-how">
	<div class="container grid grid-2-cols grid-center-vertically">
          <div>Test 1</div>
          <div>Test 2</div>
          <div>Test 3</div>
          <div>Test 4</div>
     </div>
</section>
```

```css
.section-how{
  padding: 9.6rem 0;
  background-color: orangered;
}

.container{
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
}

.grid-2-cols{
  grid-template-columns: repeat(2, 1fr);
}

.grid-3-cols{
  grid-template-columns: repeat(3, 1fr);
}

.grid-4-cols{
  grid-template-columns: repeat(4, 1fr);
}

.grid-center-vertically {
align-items: center;
}

.section-how div div{
  padding: 100px;
  font-size: 50px;
  background-color: #333;
}
```

<hr />

## Coder une liste qui passe bien à la ligne comme il faut
Une vidéo qui pourra vous être bien utile lorsque nous entamerons la quatrième partie de ce cours.

<iframe width="560" height="315" src="https://www.youtube.com/embed/o5nD0BB7uH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
