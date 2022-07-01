export const inject = ()=> {
    const getByClass = (className) => Array.from(document.getElementsByClassName(className))[0]
    const getText = (className) => getByClass(className).textContent

    chrome.runtime.sendMessage({
        id: getText("entity-result__primary-subtitle t-14 t-black t-normal"),
        iconUrl: getByClass("presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3  EntityPhoto-circle-3 lazy-image ember-view").src
    })
}