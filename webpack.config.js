var path = require('path');

module.exports = {

  externals:{
    pixi:'PIXI',
    PIXI:'PIXI'
  },

  entry:{
    bundle:['./index.js','./test/index.js']
  },
  output:{
    path:path.resolve(__dirname,'./dist'),
    publicPath:'dist',
    filename:'pixi-lib.js'
  }
};