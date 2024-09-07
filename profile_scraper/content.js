chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'click') {
        const persons = document.querySelectorAll("li.reusable-search__result-container");
        const person_name = persons[message.id].querySelector("a.app-aware-link");
        person_name.click();

        sendResponse({ "status": "clicked" })

        // sendResponse({ data: "name" })
        // const name = nameElement.textContent;
        // const sections = document.querySelectorAll("section.artdeco-card");

        // const res = new Array();
        // for (const section of sections) {
        //     const isExperience = section.querySelector("#experience");
        //     if (isExperience) {
        //         const experiences = section.querySelectorAll("li.artdeco-list__item");
        //         for (const experience of experiences) {
        //             const mainBox = experience.querySelector("div > div.display-flex.flex-column.full-width.align-self-center > div.display-flex.flex-row.justify-space-between");

        //             const data = new Array();
        //             if (mainBox) {
        //                 const spans = mainBox.querySelectorAll('span[aria-hidden="true"]');
        //                 for (const span of spans) {
        //                     data.push(span.textContent);
        //                 }

        //                 if (spans.length < 3) {
        //                     const furtherspans = experience.querySelector("div > div.display-flex.flex-column.full-width.align-self-center > div.pvs-entity__sub-components").querySelectorAll('span[aria-hidden="true"]');
        //                     if (furtherspans) {
        //                         for (const furtherspan of furtherspans) {
        //                             data.push(furtherspan.textContent);
        //                         }
        //                     }
        //                 }
        //             }
        //             res.push(data);
        //         }
        //     }
        // }

        // sendResponse({ data: name });
    }

    if (message.action === 'getNum') {
        persons = document.querySelectorAll("li.reusable-search__result-container");
        sendResponse({ num: persons.length });
    }

    if (message.action === 'scrape') {
        const nameElement = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words");
        if (nameElement) {
            sendResponse({ data: nameElement.textContent });
        }
        else sendResponse({ data: "Failed" });
    }
});
