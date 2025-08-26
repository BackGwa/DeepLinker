/* parser.js : parses the GET syntax of redirect links. */

function parseLink(url) {
    const absoluteUrl = new URL(url, window.location.href);
    const params = absoluteUrl.searchParams;
    const base64Data = params.get('data');
    if (!base64Data) return null;
    
    try {
        const jsonString = atob(decodeURIComponent(base64Data));
        const content = JSON.parse(jsonString);
        return content;
    } catch (e) {
        console.error("Failed to parsing : ", e);
        return null;
    }
}