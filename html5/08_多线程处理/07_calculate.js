onmessage = function (e) {
  var arr = e.data;
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%3 == 0 && arr[i]%5 ==0) {
      result += arr[i] + ",";
    }
  }
  postMessage(result);
};
