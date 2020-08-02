/*chrome.runtime.reload();
chrome.tabs.query({ url: "http://instacart.com/*" }, function(tabs)
{
    for(var i = 0; i < tabs.length; i++)
    {
        chrome.tabs.executeScript(tabs[i].id, { file: "content_script.js" }, function() {});
    }
});*/

/*chrome.tabs.onUpdated.addListener(function() {
    chrome.tabs.executeScript({
          file: 'styles.css'
        });
});

chrome.tabs.onCreated.addListener(function() {         
   chrome.tabs.executeScript({
          file: 'styles.css'
        });
});*/