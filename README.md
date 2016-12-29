# pug-plugin-no-yield

This pug-plugin converts "yield" into a tag instead of a keyword.

So, you can use "yield" for riot keywoad.

## Installation

`npm install --save-dev pug-plugin-no-yield`

## Usage

In your webpack.config.js  file:

```javascript
module.exports = {
  // your config settings ...
  module: [
    // your modules...
    loaders: [{
      include: /\.tag.pug/,
      // pass options to pug as a query
      loader: 'riotjs!pug-html?pretty&exports=false&plugins[]=pug-plugin-no-yield'
    }]
  ]
};
```

See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
