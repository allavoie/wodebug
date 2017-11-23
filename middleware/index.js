// file ./wodebug/myapp.json used for config
// Or find in package.json under wo.wodebug
// And display choice on first wo log
// express usage
// app.use(wodebug.init('myapp').middleware);
const _ = require('lodash');

const consoleProxy = function consoleProxy(){
  // if we are serving a given request, yes trigger logToChannel action otherwise, perform normal console.log execution
};

const middleware = function middleware(req, res, next){
  _.set(req, "wo.wodebug.flags", { debug: true });
  req.wo.wodebug.console = consoleProxy;
  // search in stack trace if we are serving this req to allow console.log overwrite locally
  // Learn how to deal with Promises that are detacted from req stack trace
  return next();
}


module.exports = {
  init: function(){
    return {

    }
  },
  console: {
    log: function(){},
  }
};
