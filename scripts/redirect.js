/* redirect.js : Calls a deeplink or redirects to the specified page. */

function isSimulator() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function redirectToFallback(content) {
    const agent = getUserAgent();
    let fallbackLink = "";

    switch (agent) {
        case "Android":
            fallbackLink = content.applicationAndroidLink;
            break;
        case "iOS":
            fallbackLink = content.applicationiOSLink;
            break;
        case "Windows":
            fallbackLink = content.applicationWindowsLink;
            break;
        case "macOS":
            fallbackLink = content.applicationOSXLink;
            break;
        case "Linux":
            fallbackLink = content.applicationLinuxLink;
            break;
    }

    if (!fallbackLink || agent === "Unknown") {
        fallbackLink = content.WebLink || "about:blank";
    }

    location.href = fallbackLink;
}

function renderScreen(content) {
    const iconComponent = document.getElementById("applicationIcon");
    const nameComponent = document.getElementById("applicationName");

    window.document.title = `Redirecting to ${content.applicationName}...`;
    iconComponent.src = content.applicationIcon;
    nameComponent.textContent = content.applicationName;
}

window.onload = () => {
    const simulator = isSimulator();
    const content = parseLink();

    if (content === null) {
        alert("Invalid Link");
        location.href = "about:blank";
    }
    
    renderScreen(content);

    if (!simulator) {
        if (content.applicationDeepLink) {
            location.href = content.applicationDeepLink;

            setTimeout(() => {
                redirectToFallback(content);
            }, 2000);
        } else {
            redirectToFallback(content);
        }
    }
}
