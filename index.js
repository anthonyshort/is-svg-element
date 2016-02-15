/**
 * Supported SVG elements
 *
 * @type {Array}
 */

exports.elements = {
  'a': true,
  'altGlyph': true,
  'altGlyphDef': true,
  'altGlyphItem': true,
  'animate': true,
  'animateColor': true,
  'animateMotion': true,
  'animateTransform': true,
  'circle': true,
  'clipPath': true,
  'color-profile': true,
  'cursor': true,
  'defs': true,
  'desc': true,
  'ellipse': true,
  'feBlend': true,
  'feColorMatrix': true,
  'feComponentTransfer': true,
  'feComposite': true,
  'feConvolveMatrix': true,
  'feDiffuseLighting': true,
  'feDisplacementMap': true,
  'feDistantLight': true,
  'feFlood': true,
  'feFuncA': true,
  'feFuncB': true,
  'feFuncG': true,
  'feFuncR': true,
  'feGaussianBlur': true,
  'feImage': true,
  'feMerge': true,
  'feMergeNode': true,
  'feMorphology': true,
  'feOffset': true,
  'fePointLight': true,
  'feSpecularLighting': true,
  'feSpotLight': true,
  'feTile': true,
  'feTurbulence': true,
  'filter': true,
  'font': true,
  'font-face': true,
  'font-face-format': true,
  'font-face-name': true,
  'font-face-src': true,
  'font-face-uri': true,
  'foreignObject': true,
  'g': true,
  'glyph': true,
  'glyphRef': true,
  'hkern': true,
  'image': true,
  'line': true,
  'linearGradient': true,
  'marker': true,
  'mask': true,
  'metadata': true,
  'missing-glyph': true,
  'mpath': true,
  'path': true,
  'pattern': true,
  'polygon': true,
  'polyline': true,
  'radialGradient': true,
  'rect': true,
  'script': true,
  'set': true,
  'stop': true,
  'style': true,
  'svg': true,
  'switch': true,
  'symbol': true,
  'text': true,
  'textPath': true,
  'title': true,
  'tref': true,
  'tspan': true,
  'use': true,
  'view': true,
  'vkern': true
}

/**
 * Is element's namespace SVG?
 *
 * @param {String} name
 */

exports.isElement = function (name) {
  return name in exports.elements
}
