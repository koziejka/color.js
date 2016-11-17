# color.js
color.js is a small library that allows for quick and easy manipulation of color, change of pallets and combine them with elements of HTML.  

**current version** 1.0.2

----------

## Featuress

### Supported pallets
- RGB
- RGBA
- HSL
- HSLA
- HSV
- HSVA
- HEX [#RGB, #ARGB, #RRGGBB, #AARRGGBB]
- CMYK
- color names

### Color operations
- add
- subtract
- mix
- invert

### Utilities
- bind element properties

## Documentation

### Creating color

```javascript
new Color() // create new color
new Color("red") // create new color and initiates it (using set function)
```

### Using color

setting css properties.
```javascript
var color = new Color("red")
document.body.style.backgroundColor = color // color is automatically converted to string 
```
binding element properties to color.
```javascript
color.bind(document.body, "backgroundColor")
```

### Functions

#### `.set(value, pallete)`
sets curent color, calls [`update`](#.update()) and returns `this`.
```javascript
var color = new Color()
color.set("orange") // set color using color name
color.set({H:10, S:"10%", L: .5}}) // set color using object with values
color.set({r: 10, g:10, b: 10, a: "10%"}, "rgba") // specifying pallete improes performance, you don't have to use uppercase letters
color.set("cmyk(5%,10%,15%,20%)") // set color using string
color.set("#f00") // set Color using hex
color.set("#5f00") // #ARGB you can also use #RRGGBB and #AARRGGBB
color.set([10, 20, 30], "rgb") // set color using array, must specify pallete
color.set(color2) // set color using another color
```

----------


#### `.clone()`
returns `new color` with same values as curent.

#### `.random(pattern)`
sets curent color to random color  
returns `this`

##### using random patterns
pattern is a string in which [min-max] *(order can be reversed)* is replaced with random *(int)* number from that range.
```
color.random("hsl([50-150],50%,[70-50]%)")
```

----------

#### `.isDark()`
L < 10%  
return `bool`

#### `.isLight()`
L >= 10%  
return `bool`

----------

#### `.invert()`
inverts curent color  
calls [`update`](#.update())  
returns `this`

#### `.add(color)`
adds R, G, B values of color taking into account the alpha channel  
calls [`update`](#.update())  
return `this`

#### `.subtract(color)`
subtract R, G, B values of color taking into account the alpha channel  
calls [`update`](#.update())  
return `this`

#### `.mix(color)`
counts the average of the colors include alpha channel  
calls [`update`](#.update())  
return `this`

----------

#### `.bind(object, prop)`
using `bind` function, you can create connections between the properties of HTML elements and kolorm that are automatically updated by the [`update`](#.update()) function.

```html
<div id="foo"><div>
```

```javascript
var color = new Color()
color.bind(document.querySelector("#foo"), "backgroundColor")
color.bind(function(updatedColor){
    console.log(`new value of color is ${updatedColor.toString("hex")}`)
})
color.random()
```

#### `.update()`
update function is called affted color hange while `autoUpdate` is `true`  
update function data is stored under `this._bindData`  
so if you remove element from DOM I sugest to remove also link to it here.  
return `this`

----------


#### .to...()
| function | return |
| --- | --- |
| `.toRgb()`  | [R(0-255), G(0-255), B(0-255)] |
| `.toRgba()` | [R(0-255), G(0-255), B(0-255), A(0-1)] |
| `.toHsl()`  | [H(0-360), S(0-1), L(0-1)] |
| `.toHsla()` | [H(0-360), S(0-1), L(0-1), A(0-1)] |
| `.toHsv()`  | [H(0-360), S(0-1), V(0-1)] |
| `.toHsva()` | [H(0-360), S(0-1), V(0-1), A(0-1)] |
| `.toCmyk()` | [C(0-1), M(0-1), Y(0-1), K(0-1)] |
| `.toHex()`  | "#RRGGBB" |
| `.toName()` | "color name" |

#### `.toString(pallete)`
default returns rgba `string`  
returns stringfied color
#### `.toJSON()`
returns rgba string

### Fields
#### `R, G, B, A`
color data.

#### `_bindData[]`
array storing things to do on update
`[[function()],[element, [properties]]]`.

#### `autoUpdate`
`autoUpdate` determines whether the `update` function is performed after modifying the color.
