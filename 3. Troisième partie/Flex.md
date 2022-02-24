---
tags: [Documentation, CSS, flex]
author: [Jonas Schmedtmann]
date: [21-11-2021]
---

# Flex (notes)
Notes prises durant l'écoute du cours [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/share/101Wtc3@sgrppz3UDr4S6-dvSFLOKP5Arb7ULD8F-YwVDO7Lx6kIdeKOMiOIuQ6SPAUJIhUj/)

Voir aussi [html-css-course](https://github.com/jonasschmedtmann/html-css-course)

## Introduction to Flex box
![](https://github.com/YannHY/html-css-js/blob/main/Images/container-flex.png)

Use the ==display== property and set it to ==flex== on some container element:

```html
<div class="container">
	<div class="el el--1">HTML</div>
	<div class="el el--2">and</div>
	<div class="el el--3">CSS</div>
	<div class="el el--4">are</div>
	<div class="el el--5">amazing</div>
	<div class="el el--6">languages</div>
	<div class="el el--7">to</div>
	<div class="el el--8">learn</div>
</div>
```

Element `.container`:

```css
display: flex;
```

All the ==elements are immediately side-by-side==. These elements are called the ==flex items== (they are the child elements of the flex container).

Each of the elements contains exactly the ==space that it need== for its content.

The grey space we see after the last flex item is simply the background color of the rest of the empty container.

==Horizontally, each element takes up exactly the space that is necessary for its text content. However, vertically, by default, all the flex items are as tall as the tallest element==. If we set the height of the third element  to 150 pixels, we'll get this:

![](https://github.com/YannHY/html-css-js/blob/main/Images/height-150.png)

### Align-items (center)
All element are ==vertically aligned== using:

```css
align-items: center;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/vertically-aligned.png)

The flex container still takes the height of the highest element (which is is the one of 150px) but all the other ones simply takes the space that they need for the text or in general of the content and then they get vertically aligned in the center.

#### Align-items (flex-start)
```css
align-items: flex-start;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-start.png)

#### Align-items (flex-end)
```css
align-items: flex-end;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-end.png)

By default, the value of align-items is `stretch` (we will the see the result that we had at the beginning).

### Justify-content (center)
It justifies the content ==horizontally==!

```css
space-between: center;
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/justify-content-center.png)

#### Justify-content (space-between)
![](https://github.com/YannHY/html-css-js/blob/main/Images/justify-content-space-between.png)

The remaining space is now distributed evenly between all of these elements.

### Align-self
#### Align-self: flex-start
![](https://github.com/YannHY/html-css-js/blob/main/Images/align-self-flex-start.png)

```css
.el--1 {
align-self: flex-start;
}
```

#### Align-self: stretch
![](https://github.com/YannHY/html-css-js/blob/main/Images/align-self-stretch.png)

```css
.el--4 {
align-self: stretch;
}
```

### Order
By default, the order is zero for all of items.

#### First
```css
.el--6 {
order: -1;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/order.png)

#### Last
```css
.el--5 {
align-self: stretch;
order: 1;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/order-last.png)

```css
.el--1 {
align-self: stretch;
order: 2;
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/order-last-2.png)

### Gap
```css
gap:30px;
```

<hr />

## The flex property
The property we use to size flex items.

The `flex` property is a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`. Here are the default values:

```css
.el {
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
}
```

### flex-basis
When we want to size flex items, ==we usually do not use the width property== but instead we use `flex-basis`:

```css
.el {
flex-basis: 100px;
}
```

What happen here is that some elements do have actually a width of 100 px but when the content is larger than 100 px then the element extends to fit that content. Flex-basis is not really rigid (it's more a recommendation) because the browser, based on the content, figure out the optimal length.

Flex-box is allowed to shrink elements so that they fit the container (-> flex-shrink)

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-basis.png)

### flex-shrink
If there is not enough space in a container to fit the items with the size (that we described: `flex-basis: 200px`), then flexbox is allowed to shrink these items by default because `flex-shrink` is set to `1`. However, if we want to change that, then we can set `flex-shrink` to `0`. Now, items will be indeed 200 pixels wide.

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-shrink.png)

Then, of course, the content no longer fits the container.

So essentially what `flex-shrink` does is to determine whether `flex-box` is allowed to shrink element if necessary or not.

### flex-grow
The opposite of `flex-shrink` is `flex-grow`which determine if elements are ==allowed to grow as large as they can or not==.

We need to get rid of `flex-basis: 200px;`. Then we see that all elements have exactly the ==same size== and in total ==fill up the entire flex container==. That's exactly what `flex-grow` set to `1`is doing:

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-grow.png)

We can use `flex-grow` with a specific element:

```css
.el--1 {
align-self: flex-start;
flex-grow: 1;
/* order: 1; */
}
```

![](https://github.com/YannHY/html-css-js/blob/main/Images/flex-grox-first-element.png)

==Only the first element now is allowed to fill up all the remaining space==. The others are still with the size of the content and then the remaining space is filled up bu the first element.

If it is set to `2`, then the element will get the ==double of the available empty space== of the other ones, etc.

### The flex property is smart
If we write `flex: 1;`, it understands that `flex-grow` should be `1`.

So usually, we don't write ~~`flex-grow: 1;`~~

Instead of writing:

```css
.el {
flex-shrink: 0;
flex-grow: 0;
flex-basis: 200px;
}
```

We write the shorthand property and not one of the three properties (↑):

```css
flex: 0 0 200px;
```

<hr />

## Overview of all the properties
- Flexbox is a set of related CSS properties for **building 1-dimensional layouts**
- The main idea behing flexbox is that empty space inside a container element can be **automatically divided** by its child elements
- Flexbox makes it easy to **automatically align items to one another** inside a parent container, both horizontally and vertically
- Flexbox solves common problems such as **vertical centering** and creating **equal-height columns**
- Flexbox is perfect for **replacing floats**, allowing us to write fewer and cleaner HTML and CSS code

## Flexbox terminology
1. Flex container (`display: flex`)
2. Flex items

We can align the elements along the:
- Main axis →
- Cross axis ↓

```css
display: flex;
align-items: center; /*align items along the cross axis*/
justify-content: space-between; /*align items along the main axis*/
gap: 30px; /*No need for margin*/
```

### To size flex items
#### Default values
```css
.el {
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
}
```

<hr />

## CSS Properties of the flexbox specification
### Flex container
1. **gap: 0** | `<length>` (to create space between items, without using margin)
2. **justify-content: flex-start** | flex-end | center | space-between | space-around | space-evenly (to align items along main axis (**horizontally**, by default))
3. **align-items: stretch** | flex-start | flex-end | center | baseline (to align items along cross axis (**vertically**, by default))
4. **flex-direction: row** | row-reverse | column | column-reverse (to define which is the **main axis**)
5. **flex-wrap: nowrap** | wrap | wrap-reverse (to allow items to **wrap into a new line** if they are too large)
6. **align-content: stretch** | flex-start | flex-end | center |space-between | space-around (only applies when there are **multiple lines** (flex-wrap: wrap))

### Flex items
1. **align-self: auto** | stretch | flex-start | flex-end | center | baseline (to overwrite `align items` for individual flex items)
2. **flex-grow: 0** | `<integer>`(to allow an element **to grow** (0 means no, 1+ means yes))
3. **flex-shrink: 1** | `<integer>` (to allow an element **to shrink** (0 means no, 1+ means yes))
4. **flex-basis: auto** | `<length>` (to define an item's width, **instead of the width** property)
5. **flex: 0 1 auto** | `<int>` `<int>` `<len>` (recommended shorthand for flex-grow, flex-shrink, flex-basis)
6. order: 0 | `<integer>` (controls order of items. -1 makes item **first**, 1 makes it **last**)
