const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function handleErrors(err) {
    throw new Error(err.message);
}

async function checkStatus(urlsArray) {
    try {
        const statusArray = await Promise.all(urlsArray.map(async url => {
            const res = await fetch(url);
            return res.status
        }));
    
        return statusArray;
    } catch (err) {
        handleErrors(err);
    }
}

function generateURLsArray(urlsArray) {
    return urlsArray.map(urlObject => Object.values(urlObject).join());
}

async function validateURLs(urlsArray) {
    const links = generateURLsArray(urlsArray);
    const statusLinks = await checkStatus(links);
    const results = urlsArray.map((urlObject, index) => ({
        ...urlObject, status: statusLinks[index]
    }));

    return results;
}

module.exports = { validateURLs };