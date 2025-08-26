/* generator.js : Generates a Deeplink based on the information provided by the user. */

function collectContent() {
    const applicationName = document.getElementById("application-name")?.value || 'Application';
    const applicationIcon = document.getElementById("application-icon")?.value || `https://www.gravatar.com/avatar/${applicationName}?d=identicon`;
    const applicationDeepLink = document.getElementById("application-deeplink")?.value || '';
    const applicationWebLink = document.getElementById("web-link")?.value || '';
    const applicationAndroidLink = document.getElementById("android-link")?.value || '';
    const applicationiOSLink = document.getElementById("ios-link")?.value || '';
    const applicationWindowsLink = document.getElementById("windows-link")?.value || '';
    const applicationOSXLink = document.getElementById("macos-link")?.value || '';
    const applicationLinuxLink = document.getElementById("linux-link")?.value || '';

    return {
        "applicationIcon": applicationIcon,
        "applicationName": applicationName,
        "applicationDeepLink": applicationDeepLink,
        "applicationWebLink": applicationWebLink,
        "applicationAndroidLink": applicationAndroidLink,
        "applicationiOSLink": applicationiOSLink,
        "applicationWindowsLink": applicationWindowsLink,
        "applicationOSXLink": applicationOSXLink,
        "applicationLinuxLink": applicationLinuxLink
    }
}

function getRootDomain() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(p => p);
    const firstFolder = parts[0] ? `/${parts[0]}/` : '/';
    return origin + firstFolder;
}

function base64EncodeUnicode(str) {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
            return String.fromCharCode('0x' + p1);
        })
    );
}

function generateLink() {
    const rootDomain = getRootDomain();
    const content = collectContent();
    const encodeData = base64EncodeUnicode(JSON.stringify(content));

    return rootDomain + "redirect.html?data=" + encodeURIComponent(encodeData);
}