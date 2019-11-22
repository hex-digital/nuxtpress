# SCSS
This projects styling uses SCSS, and is based on the ITCSS methodology for folder structure, and BEM for class name structure.

It uses Inuitcss as the baseline, which is a barebones SCSS framework.
It provides a series of commonly used objects for layouts, and a folder structure for the rest of our styles.
Read more at https://github.com/inuitcss/inuitcss

## BEM
BEM – meaning block, element, modifier - a smart way of naming your CSS classes to give them more transparency and meaning to other developers, and make maintaining SCSS easier.

[Learn more about BEM here](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

## ITCSS Folder Structure

ITCSS (Inverted Triangle CSS) is a methodology for separating styles into 7 main directories. It helps us not only to store code in namespaced locations, but to be able to add further clarity to our class names to explain what they are.

[Learn more about ITCSS here](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

Settings contains project-level configuration, and is usually the largest section (hence the inverted base of the triangle).

Tools provides site-wide tools, such as mixins and functions.

Generic includes low-specificity, far-reaching rulesets, such as resets and normalisation.

Elements includes styles targetting specific, unclassed HTML elements, such as `html {}`, `body {}`, `p {}`, `blockquote {}`, etc.

Objects contain our objects, abstractions and design patterns. These are usually related to layouts, like grids or media objects, and should rarely have visual styling, if ever.
Our set of Objects can be ported across projects, without fear of having to re-skin them (as they have no skin to start with).

Utilities contains high-specificity, very explicit selectors. This includes overrides and helper classes. We also use utilities in a similar vein to atomic CSS, allowing us expressive classes that do very single things, such as `u-color-primary` for changing text color.

You may notice there's no folder for component styling, e.g. buttons. This is because all styling for components should be done in Vue files, under the style section.
Even some objects should be considered as Vue components too, so that we think first about Vue components, and only use scss files when they are not fit for purpose.  
