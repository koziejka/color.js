/* colors.js v1.0.2 by Maciej Kozieja; email: koziejka.com@gmail.com;github:https://github.com/koziejka/color.js */
(function () {
    const COLOR_NAMES = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred ", "indigo  ", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], COLOR_VALUES = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#A9A9A9", "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#808080", "#008000", "#ADFF2F", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#D3D3D3", "#90EE90", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370D8", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#D87093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#FFFFFF", "#F5F5F5", "#FFFF00", "#9ACD32"]

    function Color(init, palet) {
        this.R = 0
        this.G = 0
        this.B = 0
        this.A = 1
        this._bindData = []
        this.autoUpdate = true
        this.set(init, palet)
    }
    Color.prototype._set = function (val, palette) {
        switch (palette) {
            case "rgb":
            case "rgba":
                if (val[0] != undefined) this.R = Math.round(val[0])
                if (val[1] != undefined) this.G = Math.round(val[1])
                if (val[2] != undefined) this.B = Math.round(val[2])
                if (typeof val[3] === "string") this.A = val[3].replace("%", "") / 100
                else if (typeof val[3] === "number") this.A = val[3]
                return
            case "hsl":
            case "hsla":
                var [H, S, L] = this.toHsl()

                if (val[0] != undefined) H = val[0]
                if (typeof val[1] === "string") S = val[1].replace("%", "") / 100
                else if (typeof val[1] === "number") S = val[1]
                if (typeof val[2] === "string") L = val[2].replace("%", "") / 100
                else if (typeof val[2] === "number") L = val[2]
                if (typeof val[3] === "string") this.A = val[3].replace("%", "") / 100
                else if (typeof val[3] === "number") this.A = val[3]

                var _c = (1 - Math.abs(2 * L - 1)) * S,
                    _x = _c * (1 - Math.abs(H / 60 % 2 - 1)),
                    m = L - _c / 2

                var _r, _g, _b
                switch (Math.floor(H / 60)) {
                    case 0:
                        _r = _c
                        _g = _x
                        _b = 0
                        break
                    case 1:
                        _r = _x
                        _g = _c
                        _b = 0
                        break
                    case 2:
                        _r = 0
                        _g = _c
                        _b = _x
                        break
                    case 3:
                        _r = 0
                        _g = _x
                        _b = _c
                        break
                    case 4:
                        _r = _x
                        _g = 0
                        _b = _c
                        break
                    case 5:
                        _r = _c
                        _g = 0
                        _b = _x
                        break
                }

                this.R = Math.round((_r + m) * 255)
                this.G = Math.round((_g + m) * 255)
                this.B = Math.round((_b + m) * 255)

                return
            case "hsv":
            case "hsva":
                var [H, S, V] = this.toHsv()

                if (val[0] != undefined) H = val[0]
                if (typeof val[1] === "string") S = val[1].replace("%", "") / 100
                else if (typeof val[1] === "number") S = val[1]
                if (typeof val[2] === "string") V = val[2].replace("%", "") / 100
                else if (typeof val[2] === "number") V = val[2]
                if (typeof val[3] === "string") this.A = val[3].replace("%", "") / 100
                else if (typeof val[3] === "number") this.A = val[3]

                var _c = (1 - Math.abs(2 * V - 1)) * S,
                    _x = _c * (1 - Math.abs(H / 60 % 2 - 1)),
                    m = V - _c

                var _r, _g, _b
                switch (Math.floor(H / 60)) {
                    case 0:
                        _r = _c
                        _g = _x
                        _b = 0
                        break
                    case 1:
                        _r = _x
                        _g = _c
                        _b = 0
                        break
                    case 2:
                        _r = 0
                        _g = _c
                        _b = _x
                        break
                    case 3:
                        _r = 0
                        _g = _x
                        _b = _c
                        break
                    case 4:
                        _r = _x
                        _g = 0
                        _b = _c
                        break
                    case 5:
                        _r = _c
                        _g = 0
                        _b = _x
                        break
                }

                this.R = Math.round((_r + m) * 255)
                this.G = Math.round((_g + m) * 255)
                this.B = Math.round((_b + m) * 255)

                return
            case "cmyk":
                var [C, M, Y, K] = this.toCmyk()

                if (typeof val[0] === "string") C = val[0].replace("%", "") / 100
                else if (typeof val[0] === "number") C = val[0]
                if (typeof val[1] === "string") M = val[1].replace("%", "") / 100
                else if (typeof val[1] === "number") M = val[1]
                if (typeof val[2] === "string") Y = val[2].replace("%", "") / 100
                else if (typeof val[2] === "number") Y = val[2]
                if (typeof val[3] === "string") K = val[3].replace("%", "") / 100
                else if (typeof val[3] === "number") K = val[3]

                this.R = Math.round(255 * (1 - C) * (1 - K))
                this.G = Math.round(255 * (1 - M) * (1 - K))
                this.B = Math.round(255 * (1 - Y) * (1 - K))
                this.A = 1
                return
        }
    }
    Color.prototype.set = function (value, palette) {
        if (typeof value === "object") {
            if (Object.prototype.toString.call(value) === "[object Object]") {

                if (!palette) {
                    if (value.R != undefined || value.r != undefined ||
                        value.G != undefined || value.g != undefined ||
                        value.B != undefined || value.b != undefined)
                        palette = "rgb"
                    else if (value.H != undefined || value.h != undefined ||
                        value.S != undefined || value.s != undefined) {
                        if (value.L != undefined || value.l != undefined) palette = "hsl"
                        else palette = "hsv"
                    }
                    else if (value.C != undefined || value.c != undefined ||
                        value.M != undefined || value.m != undefined ||
                        value.Y != undefined || value.y != undefined ||
                        value.K != undefined || value.k != undefined)
                        palette = "cmyk"
                }

                switch (palette) {
                    case "rgb":
                    case "rgba":
                        this._set([value.R || value.r, value.G || value.g, value.B || value.b, value.A || value.a], "rgb")
                        break
                    case "hsl":
                    case "hsla":
                        this._set([value.H || value.h, value.S || value.s, value.L || value.l, value.A || value.a], "hsl")
                        break
                    case "hsv":
                    case "hsva":
                        this._set([value.H || value.h, value.S || value.s, value.V || value.v, value.A || value.a], "hsv")
                        break
                    case "cmyk":
                        this._set([value.C || value.c, value.M || value.m, value.Y || value.y, value.K || value.k], "cmyk")
                        break
                }
                if (this.autoUpdate) this.update()
                return this
            } else if (Object.prototype.toString.call(value) === "[object Array]") {

                if (!palette) return this
                this._set(value, palette)
                if (this.autoUpdate) this.update()
                return this

            } else if (this instanceof Color) {
                this.R = value.R
                this.G = value.G
                this.B = value.B
                this.A = value.A
                if (this.autoUpdate) this.update()
                return this
            }
        } else if (typeof value === "string") {
            value = value.toLowerCase()
            var i = COLOR_NAMES.indexOf(value)
            if (i !== -1) {
                this.set(COLOR_VALUES[i])
                return this
            }
            if (!palette) {
                if (value.indexOf("#") != -1) palette = "hex"
                else if (value.indexOf("rgb") != -1) palette = "rgb"
                else if (value.indexOf("hsl") != -1) palette = "hsl"
                else if (value.indexOf("hsv") != -1) palette = "hsv"
                else if (value.indexOf("cmyk") != -1) palette = "cmyk"
            }

            switch (palette) {
                case "hex":
                    var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
                    value = value.replace("#", "")
                    switch (value.length) {
                        case 3:
                            this.R = values.indexOf(value[0]) * 16 + values.indexOf(value[0])
                            this.G = values.indexOf(value[1]) * 16 + values.indexOf(value[1])
                            this.B = values.indexOf(value[2]) * 16 + values.indexOf(value[2])
                            break
                        case 4:
                            this.A = (values.indexOf(value[0]) * 16 + values.indexOf(value[0])) / 255
                            this.R = values.indexOf(value[1]) * 16 + values.indexOf(value[1])
                            this.G = values.indexOf(value[2]) * 16 + values.indexOf(value[2])
                            this.B = values.indexOf(value[3]) * 16 + values.indexOf(value[3])
                            break
                        case 6:
                            this.R = values.indexOf(value[0]) * 16 + values.indexOf(value[1])
                            this.G = values.indexOf(value[2]) * 16 + values.indexOf(value[3])
                            this.B = values.indexOf(value[4]) * 16 + values.indexOf(value[5])
                            break
                        case 8:
                            this.A = (values.indexOf(value[0]) * 16 + values.indexOf(value[1])) / 255
                            this.R = values.indexOf(value[2]) * 16 + values.indexOf(value[3])
                            this.G = values.indexOf(value[4]) * 16 + values.indexOf(value[5])
                            this.B = values.indexOf(value[6]) * 16 + values.indexOf(value[7])
                            break
                    }
                    break
                default:
                    this._set(value.match(/\((.*?)\)/)[1].split(","), palette)
                    break
            }
            if (this.autoUpdate) this.update()
            return this
        }
    }
    ///
    Color.prototype.toRgb = function () {
        return [this.R, this.G, this.B]
    }
    Color.prototype.toRgba = function () {
        return [this.R, this.G, this.B, this.A]
    }
    Color.prototype.toHsl = function () {
        var _r = this.R / 255,
            _g = this.G / 255,
            _b = this.B / 255,
            max = Math.max(_r, _g, _b),
            min = Math.min(_r, _g, _b)

        var h, s, l = (max + min) / 2

        if (max == min) h = s = 0
        else {
            var delta = max - min
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)
            switch (max) {
                case _r:
                    h = 60 * (_g - _b) / delta + (_g < _b ? 6 : 0)
                    break
                case _g:
                    h = 60 * (_b - _r) / delta + 2
                    break
                case _b:
                    h = 60 * (_r - _g) / delta + 4
                    break
            }
        }
        return [h, s, l]
    }
    Color.prototype.toHsla = function () {
        var hsl = this.toHsl()
        hsl[3] = this.A
        return hsl
    }
    Color.prototype.toHsv = function () {
        var _r = this.R / 255,
            _g = this.G / 255,
            _b = this.B / 255,
            max = Math.max(_r, _g, _b),
            min = Math.min(_r, _g, _b),
            delta = max - min

        var H, S, V
        if (delta == 0) {
            H = 0
        } else if (max == _r) {
            H = 60 * ((_g - _b / delta) % 6)
        } else if (max == _g) {
            H = 60 * ((_b - _r / delta) + 2)
        } else if (max == _b) {
            H = 60 * ((_r - _g / delta) + 4)
        }

        if (max == 0) S = 0
        else S = delta / max

        V = max

        return [H, S, V]
    }
    Color.prototype.toHsva = function () {
        var hsv = this.toHsv()
        hsv[3] = this.A
        return hsv
    }
    Color.prototype.toCmyk = function () {
        var _r = this.R / 255,
            _g = this.G / 255,
            _b = this.B / 255
        var K = 1 - Math.max(_r, _g, _b),
            C = (1 - _r - K) / (1 - K) || 0,
            M = (1 - _g - K) / (1 - K) || 0,
            Y = (1 - _b - K) / (1 - K) || 0
        return [C, M, Y, K]
    }
    Color.prototype.toHex = function () {
        var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

        return "#" + values[Math.floor(this.R / 16)] + values[Math.floor(this.R % 16)]
            + values[Math.floor(this.G / 16)] + values[Math.floor(this.G % 16)]
            + values[Math.floor(this.B / 16)] + values[Math.floor(this.B % 16)]
    }
    Color.prototype.toName = function () {
        if (this.A == 0) return "transparent"
        return COLOR_NAMES[COLOR_VALUES.indexOf(this.toHex())] || ""
    }
    Color.prototype.toString = function (type) {
        if (type) type = type.toLowerCase()
        switch (type) {
            case "hsl":
                var temp = this.toHsl()
                return `hsl(${Math.round(100 * temp[0]) / 100},${Math.round(1000 * temp[1]) / 10}%,${Math.round(1000 * temp[2]) / 10}%)`
            case "hsla":
                var temp = this.toHsl()
                return `hsla(${Math.round(100 * temp[0]) / 100},${Math.round(1000 * temp[1]) / 10}%,${Math.round(1000 * temp[2]) / 10}%,${100 * this.A}%)`
            case "hsv":
                var temp = this.toHsv()
                return `hsv(${Math.round(100 * temp[0]) / 100},${Math.round(1000 * temp[1]) / 10}%,${Math.round(1000 * temp[2]) / 10}%)`
            case "hsva":
                var temp = this.toHsv()
                return `hsva(${Math.round(100 * temp[0]) / 100},${Math.round(1000 * temp[1]) / 10}%,${Math.round(1000 * temp[2]) / 10}%,${100 * this.A}%)`
            case "hex":
                return this.toHex()
            case "name":
            case "named":
                return this.toName()
            default:
                return `rgba(${this.R},${this.G},${this.B},${this.A})`
        }
    }
    Color.prototype.toJSON = function () {
        return this.toRgba()
    }
    ///
    Color.prototype.invert = function () {
        this.R = 255 - this.R
        this.G = 255 - this.G
        this.B = 255 - this.B
        if (this.autoUpdate) this.update()
        return this
    }
    Color.prototype.clone = function () {
        return new Color(this)
    }
    Color.prototype.random = function (pattern) {
        if (typeof pattern === "string") {
            var regex = /\[(.*?)\]/g, toReplace = []
            while (match = regex.exec(pattern)) {
                var split = match[1].split("-"),
                    max = Math.max(split[0], split[1]),
                    min = Math.min(split[0], split[1]),
                    val = Math.floor(Math.random() * max) + min
                val = val > max ? max : val
                toReplace.push([match[0], val])
            }
            for (var i = 0; i < toReplace.length; i++)
                pattern = pattern.replace(toReplace[i][0], toReplace[i][1])

            this.set(pattern)
            return this
        }

        this.R = Math.floor(Math.random() * 255)
        this.G = Math.floor(Math.random() * 255)
        this.B = Math.floor(Math.random() * 255)

        if (this.autoUpdate) this.update()
        return this
    }
    Color.prototype.add = function (color) {
        this.R = Math.min(this.R + color.R * color.A, 255)
        this.G = Math.min(this.G + color.G * color.A, 255)
        this.B = Math.min(this.B + color.B * color.A, 255)
        if (this.autoUpdate) this.update()
        return this
    }
    Color.prototype.subtract = function (color) {
        this.R = Math.max(this.R - color.R * color.A, 0)
        this.G = Math.max(this.G - color.G * color.A, 0)
        this.B = Math.max(this.B - color.B * color.A, 0)
        if (this.autoUpdate) this.update()
        return this
    }
    Color.prototype.mix = function (color) {
        this.R = Math.floor((this.R + color.R) / 2)
        this.G = Math.floor((this.G + color.G) / 2)
        this.B = Math.floor((this.B + color.B) / 2)
        this.A = (this.A + color.A) / 2
        if (this.autoUpdate) this.update()
        return this
    }
    ///
    Color.prototype.isDark = function () {
        return Math.max(this.R, this.G, this.B) + Math.min(this.R, this.G, this.B) < 55
    }
    Color.prototype.isLight = function () {
        return !this.isDark()
    }
    ///
    Color.prototype.update = function () {
        var color = this.toString(),
            data = this._bindData
        for (var i = 0; i < data.length; i++) {
            if (typeof data[i][0] === "function") {
                data[i][0](this)
            } else for (var j = 0; j < data[i][1].length; j++) {
                data[i][0].style[data[i][1][j]] = color
            }
        }
        return this
    }
    Color.prototype.bind = function (object, prop) {
        if (typeof object == "object") {
            for (var i = 0; i < object.length; i++) {
                if (typeof object[i] == "function") this._bindData.push([object[i]])
                else if (typeof prop == "string") this._bindData.push([object[i], [prop]])
                else this._bindData.push([object[i], prop])
            }
        } else {
            if (typeof object[i] == "function") this._bindData.push([object])
            else if (typeof prop == "string") this._bindData.push([object, [prop]])
            else this._bindData.push([object, prop])
        }
    }

    window.Color = Color
})()
