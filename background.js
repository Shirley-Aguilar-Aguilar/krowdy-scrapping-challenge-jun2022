console.log("Background script alive and running.....");

import {inject} from "./scrapper.js"

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: (/^https:\/\/www\.linkedin\.com\/.+/).test(tab.url)? inject:()=> alert("En esta pagina no se puede scrappear.")
    })
})

chrome.runtime.onMessage.addListener((message)=> {
    console.log(message);
    chrome.notifications.create({title: "Scrapper", message: `Se ha escrapeado con exito: Puesto${message.id}`, iconUrl:message.iconUrl, type: "basic"});

    //sending data with fetch native method
    var url = 'https://service.com/saveProfile';
    var data = {idProfile: message.id, profileImg: message.iconUrl};

    fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
})