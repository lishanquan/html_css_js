onmessage = function(e) {
  var d = e.data;
  var str = d.split("").reverse().join("");
  this.postMessage(str);
};
