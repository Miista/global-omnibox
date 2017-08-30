var showPopup = function() {
  var window_width = 850;
  var window_height = 120;
  var window_left =
      (window.screen.availWidth - window_width) / 2 +
          window.screen.availLeft;
  var window_top =
      (window.screen.availHeight - window_height) / 2 +
          window.screen.availTop;

  window.open(
      "popup.html", undefined,
      "location=no,chrome=no,fullscreen=yes,resizable=no," +
          "height=" + window_height + ",width=" + window_width + "," +
          "top=" + window_top + ",left=" + window_left);
};

chrome.commands.onCommand.addListener(function(command) {
  showPopup();
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action === 'showPopup') {
    showPopup();
  } else {
    debugger;
  }
  sendResponse({});
});