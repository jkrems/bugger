// Generated by CoffeeScript 2.0.0-beta5
module.exports = function (refs) {
  return function (body) {
    var script;
    script = {
      scriptId: body.id.toString(),
      url: 'file://' + body.name,
      startLine: body.lineOffset,
      isContentScript: false,
      scriptSource: body.source
    };
    return script;
  };
};