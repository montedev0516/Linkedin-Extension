
document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    const outputDiv = document.getElementById('output');

    clickButton.addEventListener('click', async () => {
        try {
            chrome.runtime.sendMessage({ action: 'start' });
        } catch (error) {
            console.error('Error:', error);
            outputDiv.textContent = 'An error occurred: ' + error.message;
        }
    });
});
