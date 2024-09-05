chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'start') {
        const nameElement = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words");
        // const button = document.querySelector("#changeColorBtn");

        const name = nameElement.textContent;

        sendResponse({ data: name });
    }
});
