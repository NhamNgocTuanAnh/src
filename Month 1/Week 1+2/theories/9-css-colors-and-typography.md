# Colors
## Color Name Keywords
Color name keywords can be used to set color property values for elements in CSS.
```
h1 {
  color: aqua;
}

li {
  color: khaki;
}
```
## CSS Color Alpha Values
Alpha values determine the transparency of colors in CSS. Alpha values can be set for both RGB and HSL colors by using **rgba()** and **hsla()** and providing a fourth value representing alpha. Alpha values can range between **0.0** (totally transparent) and **1.0** (totally opaque).

The CSS **transparent** value can also be used to create a fully transparent element.
```
.midground {
  background-color: rgba(0, 255, 0, 0.5);
}

.foreground {
  background-color: hsla(34, 100%, 50%, 0.1);
}

.transparent {
  color: transparent;
}
```
## CSS Hexadecimal Colors
CSS colors can be represented in hexadecimal (or hex) notation. Hexadecimal digits can represent sixteen different values using ``0-9`` and ``a-f``.

Hexadecimal colors are composed of 6 characters–each group of two represents a value between ``0`` and ``255`` for red, green, or blue. For example ``#ff0000`` is all red, no green, and no blue.

When both characters of all three colors are repeated, hex colors can be abbreviated to only three values, so ``#0000ff`` could also be represented as ``#00f``.
```
.red {
  color: #ff0000;
}

.short-blue {
  color: #00f;
}
```
## CSS HSL Colors
CSS colors can be declared with the HSL color system using hsl() syntax. This syntax contains three values: hue (the color value itself), saturation (intensity), and lightness.

Hue values range from 0 to 360 while saturation and lightness values are represented as percentages.
```
.light-blue {
  background-color: hsl(200, 70%, 50%);
}
```
## CSS rgb() Colors
CSS colors can be declared with RGB colors using **rgb()** syntax.

**rgb()** should be supplied with three values representing red, green, and blue. These values range can from 0 to 255.
```
.hot-pink {
  color: rgb(249, 2, 171);
}

.green {
  color: rgb(0, 255, 0);
}
```
# Typography
## CSS font-weight Property
The CSS **font-weight** property declares how thick or thin should be the characters of a text. Numerical values can be used with this property to set the thickness of the text. The numeric scale range of this property is from 100 to 900 and accepts only multiples of 100. The default value is **normal** while the default numerical value is **400**. Any value less than **400** will have text appear lighter than the default while any numerical value greater than the **400** will appear bolder.

In the given example, all the `<p>` elements will appear in a bolder font.
```
/* Sets the text as bolder. */
p {
  font-weight: 700;
}
```
## CSS font-style property
The CSS font-style property determines the font style in which text will appear.

It accepts **italic** as a value to set the font style to italic.
```
.text {
  font-style: italic;
}
```
## CSS @font-face rule
The CSS @font-face rule allows external fonts or font files to be imported directly into stylesheets.The location of the font file must be specified in the CSS rule so that the files can be loaded from that location. This rule also allows locally hosted fonts to be added using a relative file path instead of a web URL.
```
@font-face {
  font-family: 'Glegoo';
  src: url('../fonts/Glegoo-Regular.ttf') forma t('truetype');
}
```
## CSS Fallback Fonts
The CSS **font-family** property can have multiple fonts declared in order of preference. In this case the fonts following the initial font are known as the fallback fonts.

If the initial value of the property **font-family** fails to load to the webpage, the fallback fonts will be used.
```
/* Here `Arial` is the fallback font for <p> tags */
p {
  font-family: "Helvetica", "Arial";
}
```
## The CSS line-height property
The CSS **line-height** property declares the vertical spacing between lines of text. It accepts both unitless numbers as a ratio (eg. **2**) and numbers specified by unit as values (eg. **12px**) but it does not accept negative numbers. A unitless number is an absolute value that will compute the line height as a ratio to the font size and a unit number can be any valid CSS unit (eg. pixels, percents, ems, rems, etc.). To set the **line-height** of the `<p>` elements to **10px**, the given CSS declaration can be used.
```
p {
    line-height: 10px;
}
```
## CSS Linking fonts
Linking fonts allow user to use web fonts in the document. They can be imported in an HTML document by using the `<link>` tag. Once the web font URL is placed within the **href** attribute, the imported font can then be used in CSS declaration.
```
<head>
  <link href="https://fonts.googleapis.com/css?family=Droid%20Serif" rel="stylesheet">
</head>
```
