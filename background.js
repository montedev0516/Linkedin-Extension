chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startScraping') {
        console.log('Received message to start scraping:');

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'start', id: message.id }, function (response) {
                console.log(response.data);
            });
        });
    }
});