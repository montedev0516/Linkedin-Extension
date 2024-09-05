
document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    const outputDiv = document.getElementById('output');

    clickButton.addEventListener('click', async () => {
        try {
            if (!buttonId) {
                throw new Error('Please enter a valid button ID');
            }

            chrome.runtime.sendMessage({ action: 'startScraping' });
        } catch (error) {
            console.error('Error:', error);
            outputDiv.textContent = 'An error occurred: ' + error.message;
        }
    });
});
