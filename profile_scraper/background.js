chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'start') {
        console.log("Scraping is started!");

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const page_url = tabs[0].url;
            console.log(page_url);
            chrome.tabs.sendMessage(tabs[0].id, { action: "getNum" }, function (response) {
                const profile_num = response.num;
                console.log(profile_num);

                for (let i = 0; i < profile_num; i++) {
                    setTimeout(() => {
                        chrome.tabs.sendMessage(tabs[0].id, { action: 'click', id: i }, function (response) {
                            console.log(response.status);

                            setTimeout(() => {
                                chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape', id: 0 }, function (response) {
                                    console.log(response.data);

                                    chrome.tabs.update(tabs[0].id, { url: page_url });
                                });
                            }, 10000);
                        });
                    }, 10000);
                }
            });


        });
    }
});

function send_data(data) {
    const server_url = 'https://c12d42895ebb-15633984065905290001.ngrok-free.app/end';

    fetch(server_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
}