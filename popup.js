chrome.tabs.getCurrent(function(this_tab) {
  var input = document.getElementById("input");
  var onKeyPress = function(event) {
    if (event.keyCode === 13) { // enter
      var userInput = input.value;
      var newURL = "";
      if (userInput.match(/^(https?:\/\/)?(w{3}\.)?([\w-]+)(\.\w{2,})([^\s])+$/)) {
        if (userInput.startsWith("http")) {
          // The URL has a scheme so everything is fine.
          newURL = userInput;
        }
        else if (userInput.startsWith("www")) {
          newURL = "http://" + userInput;
        }
        else {
          newURL = "http://" + userInput;
        }
        debugger;
      }
      else {
        // The user input is not an URL, so treat it as a search.
        var newURL = "https://www.google.dk/search?q=" + userInput;
      }

      chrome.tabs.create({ url: newURL });      
      chrome.tabs.remove(this_tab.id);
    } else if (event.keyCode === 27) { // escape
      chrome.tabs.remove(this_tab.id);
    }
  };

  input.addEventListener('keydown', onKeyPress, /*useCapture=*/ false);
  input.autocomplete = 'off';
  input.focus();
});