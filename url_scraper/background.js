chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'start') {
        console.log("Scraping is started!");

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let counter = 1;
            setInterval(() => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getProfile" }, function (response) {
                    const profile_links = response.links;
                    console.log(profile_links);

                    send_data(profile_links);
                });

                setTimeout(() => {
                    let page_url = `https://www.linkedin.com/search/results/people/?heroEntityKey=urn%3Ali%3Aorganization%3A4764&keywords=blackrock&origin=CLUSTER_EXPANSION&page=${counter}&position=0&searchId=05bc0915-428c-4ae5-8bbd-520f98920718`
                    chrome.tabs.update(tabs[0].id, { url: page_url });
                }, 8000);
                counter++;
                console.log(counter);
            }, 30000);
        });
    }
});

function send_data(data) {
    const server_url = 'https://19cb-45-126-3-252.ngrok-free.app/save';

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