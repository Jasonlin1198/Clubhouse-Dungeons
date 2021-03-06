const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const jsdocOptions = {
  files: './test/**', // specify where your files are
  template: fs.readFileSync('./scripts/TestDocHeader.hbs', 'utf8'), // read a template file
  noCache: true // Bypass caching
}
jsdoc2md.render(jsdocOptions).then(console.log)
