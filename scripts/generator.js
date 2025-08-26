/* generator.js : Generates a Deeplink based on the information provided by the user. */

function collectContent() {
    const applicationIcon = document.getElementById("#app-icon").value;
    const applicationName = document.getElementById("#app-name").value;
    const applicationDeepLink = document.getElementById("#deeplink").value;
    const applicationWebLink = document.getElementById("#weblink").value;

}

function getRootDomain() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(p => p);
    const firstFolder = parts[0] ? `/${parts[0]}/` : '/';
    return origin + firstFolder;
}

function generateLink() {
    const rootDomain = getRootDomain();
    const content = collectContent();
    const encodeData = btoa(JSON.stringify(content));

    return rootDomain + "redirect.html?data=" + encodeURIComponent(base64Data);
}