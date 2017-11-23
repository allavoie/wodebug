// var fs = require('fs');
// var logger = fs.createWriteStream('log.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
// });
//
//
// //logger.write(JSON.stringify(_.map(adUsers, "sAMAccountName")));
//
// function wologger(o){
//     stream.write(JSON.stringify(o, null, 2), function(){
//         console.log("Write completed");
//     });
//     stream.on("finish", function(){ console.log("Write finished;")});
//     stream.on("error", function(err){ console.log("Write error=", err)});
// }
//
//

// const Logger = require('../../xxx-log');
//
// const view = Logger.getChannel('handleAwaitFromPromise');
// Logger.enableChannel('handleAwaitFromPromise');
//
// function handleAwaitFromPromise(promise) {
//     try {
//         return promise
//             .then((data) => {
//             view.emit(data, "onThen");
//         return [null, data, promise];
//     })
//     .catch((err) => {
//             view.emit(err);
//         return [err, null, promise];
//     });
//     } catch (err) {
//         view.emit(err);
//         return [err, null, promise];
//     }
// }
//
// module.exports = {
//     handleAwaitFromPromise,
//     avoidEslintWarning: () => {},
// };
//
//
//
// const _ = require('lodash');
//
// const channels = [];
//
// const Logger = function (key) {
//     channels.push({
//         key,
//         visible: false,
//     });
//     return {
//         emit: (msg) => {
//         const found = _.find(key, { key });
//     if (found === undefined) return;
//     const isVisible = found.visible;
//     if (isVisible) console.log(msg);
// },
// };
// };
//
// const enableChannel = function (key) {
//     const found = _.find(key, { key });
//     if (found !== undefined) found.visible = true;
// };
//
// const disableChannel = function(key) {
//     const found = _.find(key, { key });
//     if (found !== -1) found.visible = false;
// };
//
//
// module.exports = {
//     enableChannel,
//     disableChannel,
//     getChannel: Logger,
// };
//


module.exports = {

};