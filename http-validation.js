const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checkStatus(urlsArray) {
    const statusArray = await Promise.all(urlsArray.map(async url => {
        const res = await fetch(url);
        return res.status
    }));

    return statusArray;
}

function generateURLsArray(urlsArray) {
    return urlsArray.map(urlObject => Object.values(urlObject).join());
}

async function validateURLs(urlsArray) {
    const links = generateURLsArray(urlsArray);
    const statusLinks = await checkStatus(links);
    return statusLinks;
}

module.exports = { validateURLs };