/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author uk-taniyama.
*/

module.exports = {
  lex: {
    yield: function(lexer){
      // ignore......
      lexer.yield = function(){}
    },
  },
};
