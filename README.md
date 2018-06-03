# :memo: :fire: Responsive line-height for the perfect vertical rhythm

Live test: https://vnurich.github.io/set-line/

`set-line` is a config file reader (SASS-map) for clean and responsive vertical rhythm, focusing on root ```font-size``` and ```line-height``` for each necessary breakpoint. The element's alignment calculated by ```padding-top``` and ```margin-bottom``` properties. And the only value that will have to be considered manually is the ```cap-height``` which is the proportion number (~0.5-0.9) of the ```font-size```.

## An element can contain the following parameters

*	```$line-height``` (**important**) - REMs (e.g. 2rem);
* ```$font-size``` (**important**) - REMs (e.g. 2.4rem);
* ```$cap-height``` (**important**) - the proporion of the font-size (e.g. 0.68), must be considered manually;
* ```$space-top``` - default ```0```, the number of 'lines' above the element ('line' is equal to the current root ```line-height```);
* ```$space-bottom``` - same as ```$space-top```, but below the element;
* ```$font-weight``` - CSS standart ```font-weight``` parameter (e.g. normal, bold, lighter, bolder,inherit, 100, 200, 300, 400, 500, 600, 700, 800, 900);
* ```$font-style``` - CSS standart ```font-style``` parameter (e.g. normal, italic, inherit);
* ```$text-align``` - CSS standart ```text-align``` parameter (e.g. left, center, right, inherit);
* ```$font-family``` - CSS standart list. *Notice*: must be prepared as a sass-map variable, for example: `$font-family-serif: ('Merriweather', 'Times New Roman', 'serif')`.

## Usage

Suppose that we have already imported ```set-line.scss``` and prepared the ```config-file.scss```. Now all you need is just to set mixins like that:

```scss
html { @include set-line('root'); }
p { @include set-line('p'); }
h1 { @include set-line('h1'); }
.my-element { @include set-line('my-element'); }
/// etc...
```

That's it! For example your compiled css stylesheet with ```p``` element may look like this:

```css
p { margin: 0; padding: 0; font-size: 1.4rem; line-height: 2rem; padding-top: 0.4rem; margin-bottom: 1.6rem; }

@media (min-width: 36em) { p { font-size: 1.6rem; line-height: 2.2rem; padding-top: 0.44rem; margin-bottom: 1.76rem; text-align: left; } }

@media (min-width: 48em) { p { font-size: 1.8rem; line-height: 2.8rem; padding-top: 0.728rem; margin-bottom: 2.072rem; } }
```
And you get your perfect vertical rhythm for each neccesary breakpoint!

Also we have two helpers which uses the config file data.

Function *get-value()* gets any value from the config file:
```scss
get-value('property-name', $for: 'element-name', $on: 'breakpoint-name');
/// for example
$my-var-one: get-value('line-height', $for: 'root', $on: 'tablet');
$my-var-two: get-value('font-size', $for: 'h1', $on: 'desktop');
```

Mixin *set-breakpoint()* creates `@media(min-width: [val]) { [content] }` wrapper:
```scss
@include set-breakpoint-for('tablet') { /*content*/ } // value taken from the config file
@include set-breakpoint-for(120rem) { /*content*/ } // value set manually. Can be rem/em/px
```

## Getting started

### Install and import lib

```javascript
npm install set-line
```

```scss
@import 'set-line'; // import main lib
@import 'path/to/config'; // import main config file

$set-line-config: $my-set-line-config; // sass var name from your config file 
$set-line-default: 'my-mobile-first-breakpoint'; // root (default/mobile-first) device name from your config file
```

### Prepare config file

First import fonts you need:
```scss
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i');
```

Set any font-family vars you want:
```scss
$font-family-serif: ('Merriweather', 'Times New Roman', 'serif');
$font-family-monospace: ('Courier', 'monospace');
/// etc...
```

Create base variable for your config:
```scss
$my-set-line-config: ();
```

And fill it with your settings. 'root' element containing 'font-size', 'breakpoint' and 'line-height' is important for each breakpoint. Here is an example:
```scss
$my-set-line-config: (
  'my-mobile-first-breakpoint': (
    'root': (
      'font-size': 62.5%,
      'breakpoint': 30em,
      'line-height': 2rem
    ),
    'p': (
      'font-size': 1.4rem,
      'cap-height': 0.8,
      'space-top': 0,
      'space-bottom': 1,
      'font-weight': 300,
      'font-style': normal,
      'text-align': justify,
      'font-family': $font-family-serif
    ),
    'my-element': (
      'font-size': 2rem,
      'cap-height': 0.64
    )
  ),
  'my-second-breakpoint': (
    'root': (
      'font-size': 62.5%,
      'breakpoint': 48em,
      'line-height': 2.8rem
    ),
    'p': (
      'font-size': 1.8rem,
      'cap-height': 0.74,
      'space-top': 0,
      'space-bottom': 1,
      'font-weight': 400,
      'font-style': normal,
      'text-align': left,
      'font-family': $font-family-serif
    ),
    'my-element': (
      'font-size': 2.8rem,
      'cap-height': 0.66
    )
  ),
  /// and so on...
);
```

## Dev environment

Clone or download this repo:
```bash
git clone https://github.com/vnurich/set-line.git
```

Install dependencies:
```bash
npm install
```

Run local server (http://localhost:3000)
```bash
npm run dev
```

## License
This project is licensed under the MIT License
