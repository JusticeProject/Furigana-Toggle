// register an event that will be called when this chrome extension's icon is clicked
chrome.action.onClicked.addListener((tab) => {
    // the icon has been clicked, so run the script for the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content-script.js']
    });
});
