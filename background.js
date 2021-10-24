var data = null;

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request && request.message) {
      if (request.message == "version") {
        // you can send any object as a message
        sendResponse({ version: 1.0 });
      }
      if (request.message == "data") {
        data = request.data;
        // successfully copied the data
        sendResponse({ success: true });
      }
    }
    return true;
});

const urlDest = "https://safind.scourt.go.kr/sf/mysafind.jsp";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf(urlDest) != -1 && changeInfo.status == 'complete') {
    var dataStr = JSON.stringify(data);
    chrome.tabs.executeScript(null, {
      // setting some variables that the script can access
      code: `var config = ${dataStr}` 
    }, function() {
        chrome.tabs.executeScript(null, {file: 'script.js'});
        data = null
    });
  }
});
