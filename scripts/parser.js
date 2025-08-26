/* parser.js : parses the GET syntax of redirect links. */

function base64DecodeUnicode(str) {
    const decoded = atob(str);
    return decodeURIComponent(
        decoded.split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
    );
}

function parseLink(url) {
    const absoluteUrl = new URL(window.location.href);
    const params = absoluteUrl.searchParams;
    const base64Data = params.get('data');
    console.log("Base64 Data : ", base64Data);
    if (!base64Data) return null;
    
    try {
        const jsonString = base64DecodeUnicode(decodeURIComponent(base64Data));
        const content = JSON.parse(jsonString);
        return content;
    } catch (e) {
        console.error("Failed to parse : ", e);
        return null;
    }
}