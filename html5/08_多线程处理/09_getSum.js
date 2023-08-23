onmessage = function (e) {
  var n = e.data;
  console.log("js.n:" + n);
  var i = 0;
  var sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  postMessage(sum);
};
